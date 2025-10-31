# Component Library

## Getting Started

---

### Dependencies

These are the recommended dependencies to install:

-   [Node.js](https://nodejs.org/en/) (v20.11.1)
-   [npm](https://www.npmjs.com/) (v10.2.4)

## Development

### Setting up local machine with the Component Library.

1. Clone the repo into C:\projects\
2. Navigate to C:\projects\component-library
   a. run `npm i`

### Branching

Branches are to be made from `main` as the source of truth. All feature branch work should follow the paradigm of `issue-1234` for branch naming.

### Creating a component

-   Create a branch using the `issue-[issuenumber]`
-   Use the following command to create a new component:

```bash
npm run generate
```

This will prompt you to enter a series of questions based on the component/page you want to create.
Once you've entered the information, it will create a new folder in the `src/components` directory within
the subdirectory the name you entered. Inside that folder, it will create the relevant files including:

-   `index.ts`
-   `ComponentName.tsx`
-   `ComponentName.stories.tsx`
-   `ComponentName.module.scss`
-   `README.md`
-   `styles.ts` (optional based on CVA)

Along with this, a corresponding mock file will be created in `src/mocks` for the component.
-    `ComponentName.tsx`  

Additionally, the generator will add the export automatically for the build process.

The generator will prompt you for the following information:

1.   Select the type of atomic component you want to create
     - **Atoms** - Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.
     - **Molecules** - Grouping atoms together, such as combining a button, input and form label to build functionality.
     -   **Organisms** - Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)
         - All components that can "stand alone" and be added directly to a page in the CMS should be organized as an Organism regardless of how simple they are.
     -   **Templates** - Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.
     -   **Pages** - An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.
2. Enter the Figma link: (Paste in the Figma.com link from user story)
3. Select if the component needs CVA (Class Variance Authority) Yes, is default
4. Enter the name of the component
     
    -   Created folder will equal the name of the component for organization.
        _Inside the folder will be_:
        -   **index.ts** – Main export of the component
        -   **README.md** – Supporting documentation and implementation notes.
        -   **ComponentName.module.scss** – Styles specific to component
        -   **ComponentName.stories.tsx** – Storybook story reads in ComponentName component
        -   **ComponentName.tsx** – React component
        -   **styles.ts** – CVA for conditional class application based on React props.
        - _Mock Data_: 
        - **src/mocks** – Mock data for the component
          -   **ComponentName.tsx** – Mock data for the component

5. Make changes files listed above where needed.
6. Write/Run unit tests to support unit of work using Jest.

   - Storybook unit tests are within the story.
   - All other tests have their own testing files.

7. Run Storybook to review the changes:

```bash
npm run sb
```

This starts the local storybook server at [http://localhost:6006](http://localhost:6006).

8. Check component and accessibility.
9. Run the build command to verify the package creates the export you expect.

```bash
npm run build
```

10. Once coding is complete commit changes.
11. Upon attempting to commit Husky will run command prior to committing code. _The command below is not something you need to run, Husky will take care of it for you. It automates prettier formatting._

```bash
npm run format
```

-   If linting doesn’t pass the commit cannot be completed until changes are made due to rules in Husky.
-   Committing will also create a prerelease registry in GitHub for consumption.
-   Make any more changes & commit as necessary.
12. Pull Request Review Process with Development
13. Design Review and Approval
14. Merging & Squashing to main will update the production Registry.

### Build

Run the following command to ensure that the package that gets generated for the registry is created correctly and be sure to verify the output in the `/dist` folder.

```bash
npm run build
```

This builds the storybook static files in the `storybook-static` folder.

### Publishing a Package

When you're done running the `npm run build` command and verified the files in the dist match when you expected.
Create a commit message should be feature|fix: message goes here
Note: casing matters, feature, fix, defect, etc… needs to be lowercase followed by a colon.

This repository publishes the package @ahc-digital/component-library.

Releases are created using [semantic-release](https://github.com/semantic-release/semantic-release). This relies on commit message convention, so the PR Titles and Commit Messages documentation from [engineering-standards](https://github.com/ahc-digital/engineering-standards) must be followed. The PR Title must be used for the commit message when performing a squash-merge to the base branch, and it must accurately reflect the type of release that should occur.

The release action will trigger on commit PUSH in branches following these naming conventions:

-   `main` as a normal Release
-   `issue-**` as a PRE-release
-   Any other branch name: no release or PRE-release will be created

Releases are automatically versioned by semantic-release following https://semver.org specification.

-   Normal releases: MAJOR.MINOR.PATCH
-   PRE-releases: MAJOR.MINOR.PATH-`<branch name>`.`<build id>`

You can follow along with the publishing process:

-   [Github Action](https://github.com/ahc-digital/component-library/actions)

-   [Component Library Packages](https://github.com/ahc-digital/component-library/pkgs/npm/component-library)

This package can then be installed into the Sitecore-solution repo via:

```bash
npm install @ahc-digital/component-library@branchname.
```

### Font awesome pro icons

You will need an .npmrc file with the following code to view the Font Awesome pro icons when you run this locally.

```
@awesome.me:registry=https://npm.fontawesome.com/
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOURAPIKEYHERE
```

 Replace 'YOURAPIKEYHERE' with the font awesome api key.  
You can find the font awesome api key in Teams  
***Digital & Consumer First Technology -> Technology -> Files -> SvgIcon api key.docx***

### Add recommended workspace plugins (for VSCode users).

1. Prettier - Code formatter
2. React
3. ESLint
4. Vite
5. Sass (.sass only)
6. Pretty TypeScript Errors
7. Stylelint
