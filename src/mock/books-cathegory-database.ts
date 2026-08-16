import { CategoryTreeNode } from "src/categories/interfaces/categories.interface";

export const EXAMPLE_DATA: CategoryTreeNode[] = [
  {
    name: 'Los imprescindibles',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Religión',
    children: [
      {
        name: 'Catequesis',
      },
      {
        name: 'Historia de la iglesia',
      },
    ],
  },
  {
    name: 'Humanidades',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Ciencias Naturales',
        children: [
          {
            name: 'Bioetica',
          },
          {
            name: 'Evolucionismo',
          },
          {
            name: 'Salud',
          },
        ],
      },
    ],
  },
];

