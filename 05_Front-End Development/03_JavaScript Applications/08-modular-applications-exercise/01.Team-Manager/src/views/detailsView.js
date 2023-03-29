import { leaveTeamHandler, getTeamCandidates, getTeamMembers, joinHanlder, removeHandler, editHandler } from '../services/guildBtnHandlers.js';
import { getTeamDetails } from '../services/teamsServices.js';
import { getLastRemovedMember, getUserId } from '../services/userServices.js';
import { detailsTemplate } from './templates/detailsTemplate.js';
import { appliedTemplate, nonAppliedTemplate, ownerViewTemplate } from './userViews.js';


export async function detailsPage(ctx) {
    let currentTeam = await getTeamDetails(ctx.params.id);
    let teamId = currentTeam._id;
    let teamOwnerId = currentTeam._ownerId;
    let currentUserId = getUserId();

    let members = await getTeamMembers(teamId);
    let candidates = await getTeamCandidates(teamId);

    let isOwner = teamOwnerId === currentUserId;
    let isMember = members.some(m => m._ownerId === currentUserId && m.status == 'member' && isOwner === false);
    let isGuest = currentUserId === null;
    let isApplied = candidates.some(m => m._ownerId === currentUserId);
    let isNonAppliedMember = isMember == false && isGuest == false && isApplied == false && isOwner == false;
    let lastRemovedMember = await getLastRemovedMember();

    let currentUserView;

    if (isOwner) {
        currentUserView = ownerViewTemplate(ctx, members, candidates, teamOwnerId, lastRemovedMember);
    } else if (isNonAppliedMember) {
        currentUserView = nonAppliedTemplate(ctx, members, joinHanlder);
    } else if (isApplied) {
        const candidateRequestId = candidates.find(m => m._ownerId === currentUserId)._id;
        currentUserView = appliedTemplate(ctx, members, candidates, leaveTeamHandler, candidateRequestId);
    } else if (isGuest){
        let guest = true;
        currentUserView = nonAppliedTemplate(ctx, members, null, guest);
    } else if (isMember){
        let isTeamMember = true;
        const memberRequestId = members.find(m => m._ownerId === currentUserId)._id;
        currentUserView = appliedTemplate(ctx, members, candidates, leaveTeamHandler, memberRequestId, isTeamMember);
    }
    let detailsSection = detailsTemplate(currentTeam, members, currentUserView);
    ctx.render(detailsSection);
}
