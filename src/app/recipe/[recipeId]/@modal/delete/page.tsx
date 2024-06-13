import { Button } from "#/components/button";
import { Modal } from "#/components/modal";
import { deleteRecipe } from "./actions";

interface DeleteRecipePageProps {
  readonly params: {
    recipeId: string;
  };
}

const DeleteRecipePage = ({ params }: DeleteRecipePageProps) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-dvh w-dvw bg-black/20 dark:bg-black/80">
      <form action={deleteRecipe}>
        <input name="recipeId" type="hidden" value={params.recipeId} />

        <Modal
          actionButton={
            <Button intent="destructive" type="submit">
              Delete
            </Button>
          }
          title="Delete Recipe"
        >
          <p>Are you sure want to delete this recipe?</p>
        </Modal>
      </form>
    </div>
  );
};

export default DeleteRecipePage;
