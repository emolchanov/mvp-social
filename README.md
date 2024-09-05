# mvp-social
MVP Pet project for testing social sharing pages

## Project code layers

| PRIORITY | LAYER       | DESCRIPTION                                                                                                            |
| -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| 1        | shared      | The code that serves as the **foundation of the app** (common utilities, UI components, common types, constants, etc.) |
| 2        | modules     | Interactive data blocks created using lower priority layers. Mostly **standalone parts of the UI**                     |
| 3        | app (pages) | **Screens that represent the app**. Mostly contain/built using lower priority layers                                   |

- Layers with a lower priority cannot use layers with a higher priority.
- Elements of layers on the same level can use each other, but circular cross-imports should be avoided.
