import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = ({ onCreateGame }) => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
      'title': '',
      'category': '',
      'maxLevel': '',
      'image': '',
      'description': ''
    });
  
    const onChange = (e) => {
      setFormValues({
        ...formValues, [e.target.name]: e.target.value
      });
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      onCreateGame(formValues);
  
      setFormValues({
        title: '',
        image: '',
        category: '',
        description: '',
        maxLevel: '',
      });
      navigate('/catalogue');
    };


    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." value={formValues.title} onChange={onChange} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." value={formValues.category} onChange={onChange} />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min={1} placeholder={1} value={formValues.maxLevel} onChange={onChange} />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="image" placeholder="Upload a photo..." value={formValues.image} onChange={onChange} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="description" id="summary" value={formValues.description} onChange={onChange} />
                    <input className="btn submit" type="submit" defaultValue="Create Game" />
                </div>
            </form>
        </section>
    );
}


export default CreatePage;