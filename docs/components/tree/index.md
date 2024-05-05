# 树
:::demo
  ```vue
    <template>
      <STree :data="data"></STree>
    </template>
    <script setup>
    const data = [
  {
    label: "Node 1",
    id: "1",
    children: [
      {
        label: "Child 1",
        id: "1.1",
        selected: true,
        checked: false,
        expanded: true,
        disableSelect: false,
        disableCheck: false,
        disableToggle: false
      },
      {
        label: "Child 2",
        id: "1.2",
        selected: false,
        checked: true,
        expanded: false,
        disableSelect: true,
        disableCheck: true,
        disableToggle: true
      }
    ],
    selected: false,
    checked: false,
    expanded: true,
    disableSelect: false,
    disableCheck: false,
    disableToggle: false
  },
  {
    label: "Node 2",
    id: "2",
    selected: true,
    checked: true,
    expanded: false,
    disableSelect: true,
    disableCheck: true,
    disableToggle: true
  }
]
    </script>
    
  ```
:::
