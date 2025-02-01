


# Factwise Assessment - Celebrity Management

An Tool to handle CRUD operations of Celebrities data.

## Task

You are a famous hacker who has access to a list of the world's most famous celebrities.
You have to create a system where you can view and edit their details to hide their public presence.
Your mission if you choose to accept it, you have to:
1. Create the user interface provided with the design provided
2. The page should have a search bar to search the list by celebrity name.
3. The user list item is an accordion,
   - when clicked on, it will cause all the other accordions to collapse and enlarge the one which was clicked.
   - If clicked on the same one it will collapse.
   - Manage the + and - icons in open or collapsed mode (collapsed = - | open = +)
4. Fetch the JSON file provided to fill the list of users. (NOTE - YOU CANNOT EDIT THE JSON FILE)
   - You have to calculate the age of the user based on the date of birth provided
   - gender should be a dropdown (Male | Female | Transgender | Rather not say | Other)
   - country is a text field
   - Description is a text area
5. Provide buttons to edit or delete
   - edit mode will let you edit the details of the user in the exact place
   - you can only edit the user if the user is an adult
   - validations to be implemented where a user cannot
     -- input text in the age field
     -- input numbers in the nationality
     -- keep anything empty
   - when in edit mode you can either save or cancel
     -- save button will be disabled by default and will enable only if the details have changed
     -- save click will update the user's details
     -- cancel will revert the details to their last known state
     -- you cannot open another accordion while in edit mode
   - delete mode should alert you if you actually want to delete the user
     -- if yes - the user will be deleted
     -- if no - do nothing
6. Typescript is a plus

## Installation

Start with cloning this repo on your local machine:

```bash
git clone https://github.com/abhihandore/Factwise_Assessment.git
cd Factwise_Assessment
```
To install and set up the library, run:
```bash
npm install
```

## Usage

### Serving the App
```bash
npm run dev
```

### Building a distribution version
```bash
npm run build
```

## Build with

#### Vite
#### React 18
#### Module CSS
#### TypeScript
#### ( No Other external libraries used to design and develop the application )

## How I Approached the Task

For this assessment, I broke the task down into smaller, manageable modules, tackling each component individually to ensure smooth progress. Here's a detailed account of my approach:

### 1. **Search Bar**

I began by focusing on the UI for the **Search Bar**. During this phase, I also developed a **common Input component**, which I knew would be useful later in the **edit mode** of the celebrity form. This component ensures reusability and consistent styling for input fields across the application.

### 2. **Accordion**

Once the Search Bar was completed, I moved on to the **Accordion**. I started by creating a **custom Accordion component** from scratch to give it the flexibility and functionality I needed. After that, I implemented the **list of celebrities** inside the Accordion, ensuring each item was collapsible.

### 3. **View Mode**

Next, I worked on the **view mode** of the celebrity details. I populated the accordion with real data and designed the **view screen actions** accordingly. This was an important step because it ensured the basic structure of the UI and made sure the design was working as expected.

### 4. **Edit Mode**

Once the **view mode** was established, I proceeded to design the **edit mode**. This involved creating a **custom form** with fields for updating the celebrity's details. During this phase, I also developed several UI components, such as **Select**, **Textarea**, **IconButton**, and **Label**, to promote code reusability. I then focused on managing the **form state**, handling **error states**, implementing **field validations**, and creating **helper functions** to ensure everything worked smoothly.
### 5. **Form Submission**

Once the form design was complete, I focused on handling the **form submission**. This included:
- Updating the celebrity's details in the Accordion summary (`AccordionSummary`).
- Handling the other fields in the **AccordionContent** section.
- Completing form validation to ensure the inputs were correct before updating the details.

### 6. **Delete Functionality**

Finally, I implemented the **delete functionality**. I added a confirmation modal to ensure that users would be prompted before any deletion took place.

---

By breaking down the task into modules and focusing on one component at a time, I was able to build the application step by step while ensuring all aspects (like design, validation, and functionality) were thoroughly implemented and tested.


