import json


CONTACT_FILE='contacts.json'
def load_contact():
    try:
        with open(CONTACT_FILE,'r') as file:
            contacts=json.load(file)
    except FileNotFoundError:
        contacts={}
    return contacts
# print(load_contact())
def save_contacts(contacts):
    with open(CONTACT_FILE,'w') as file:
        json.dump(contacts,file,index=4)
        
def add_contacts(contacts):
    name=input("Enter name: ")
    number=input("Enter number: ")
    contacts[name]={"phone":number}
    save_contacts(contacts)

def remove_contact(contacts):
    name=input("Enter name: ")
    if name in contacts:
        del contacts[name]
    else:
        print("Contact not found")
    save_contacts(contacts)

def view_contact(contacts):
    for name,number in contacts.items():
        print(f"Name : {name}")
        print(f"Phone : {number['phone']}")
        print("_"*25)

def main():
    while True:
        contacts=load_contact()
        print("Contact Book Menu")
        print("1.Add Contact")
        print("2.Remove Contact")
        print("3.view Contact")
        print("3.Exit")
        choice=int(input("Enter your choice: "))
        if choice==1:
            add_contacts(contacts)
        elif choice==2:
            remove_contact(contacts)
        elif choice==3:
            view_contact(contacts)
        elif choice==4:
            print("Exit")
            break
    
if __name__=="__main__":
        main()
