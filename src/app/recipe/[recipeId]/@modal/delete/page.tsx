import { Button } from "#/components/button";
import { Modal } from "#/components/modal";
import { deleteRecipeAction } from "./actions";

interface DeleteRecipePageProps {
  readonly params: Promise<{
    recipeId: string;
  }>;
}

const DeleteRecipePage = async ({ params }: DeleteRecipePageProps) => {
  const parameters = await params;

  return (
    <div className="fixed left-0 top-0 z-50 h-dvh w-dvw bg-black/20 dark:bg-black/80">
      <form action={deleteRecipeAction}>
        <input name="recipeId" type="hidden" value={parameters.recipeId} />

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
