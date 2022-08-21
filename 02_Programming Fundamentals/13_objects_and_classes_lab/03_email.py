class Email:
    def __init__(self, sender, receiver, content):
        self.sender = sender
        self.receiver = receiver
        self.content = content
        self.is_sent = False

    def send(self):
        self.is_sent = True

    def get_info(self):
        return f"{self.sender} says to {self.receiver}: {self.content}. Sent: {self.is_sent}"


data = input()
emails = []

while data != "Stop":
    sender, receiver, content = data.split()
    email = Email(sender, receiver, content)
    emails.append(email)
    data = input()

indices = list(map(int, input().split(", ")))

for index in indices:
    emails[index].send()

for current_email in emails:
    print(current_email.get_info())
