export interface RecipeSidebarProps {
  imageUrl: string;
  name: string;
  description: string;
  servings: number;
  onServingChange: (servings: number) => void;
}
