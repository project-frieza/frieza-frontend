export default function (plop) {
  // 🧩 Component Generator
  plop.setGenerator("component", {
    description: "Generate a new React component with Storybook story",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (e.g. Button, Navbar, PhotoCard):",
      },
      {
        type: "list",
        name: "category",
        message: "Select component category:",
        choices: ["base", "layout", "cards", "forms", "modals"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{category}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{category}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/component/component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{category}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/component/component.test.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{category}}/{{pascalCase name}}/{{pascalCase name}}.interface.ts",
        templateFile: "templates/component/component.interface.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{category}}/{{pascalCase name}}/{{pascalCase name}}.mock.ts",
        templateFile: "templates/component/component.mock.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{category}}/{{pascalCase name}}/index.ts",
        templateFile: "templates/component/index.ts.hbs",
      },
    ],
  });

  // 🧭 Page Generator
  plop.setGenerator("page", {
    description: "Generate a new Next.js page under ../src/app/",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name (e.g. About, Dashboard, UserProfile):",
      },
      {
        type: "input",
        name: "route",
        message: "Page route (e.g. about, contact, blog/[slug]):",
      },
    ],
    actions: function (data) {
      const actions = [
        {
          type: "add",
          path: "../src/app/{{route}}/page.tsx",
          templateFile: "templates/page/page.tsx.hbs",
        },
      ];

      return actions;
    },
  });
}
