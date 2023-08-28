# Dashboard UI Components

Component set to easily build settings screens.

# Running storybook

```sh
yarn storybook
```

# Using components from this package

In your project:

```sh
yarn add @dashboard-platform/ui-components
```

In your Widget Settings Renderer:

```ts
import { SlideToggle } from "@dashboard-platform/ui-components";
```

# Components / Elements list:

## Done

_Nothing yet_

## Usable, no styling

- Slide Toggle

## Missing

- Label
- Orderable list
- List card
- Select

# How to build components

Most of the components could be simple wrappers around standard HTML components, mainly adding a consistent styling or more easy to use technical interface.

For more complex components please check out if there is a suitable 'headless' component available, that we can style to our needs.

Sites to check out for nice components:

- https://reactjsexample.com/

Some components I really liked and would recommend when needed:

- Tree component: https://github.com/brimdata/react-arborist
- Menu system: https://szhsin.github.io/react-menu/
