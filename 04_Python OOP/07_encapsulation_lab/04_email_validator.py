class EmailValidator:
    def __init__(self, min_length, mails, domains):
        self.min_length = min_length
        self.mails = mails
        self.domains = domains

    def __is_name_valid(self, name):
        return self.min_length <= len(name)

    def __is_mail_valid(self, mail):
        return any([x == mail for x in self.mails])

    def __is_domain_valid(self, domain):
        return any([x == domain for x in self.domains])

    def validate(self, email):
        data = email.split('@')
        name = data[0]
        mail, domain = data[1].split('.')
        return self.__is_name_valid(name) and self.__is_mail_valid(mail) and self.__is_domain_valid(domain)


