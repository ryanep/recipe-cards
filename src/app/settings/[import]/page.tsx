import { Heading } from "#/components/heading";
import { importAction } from "./actions";

const SettingsImportPage = () => {
  return (
    <div>
      <Heading type="h1">Import</Heading>

      <form action={importAction}>
        <label htmlFor="type">
          <div>Import type</div>

          <fieldset>
            <div className="flex gap-2">
              <div>Sanity</div>
              <input id="type" name="type" type="radio" value="sanity" />
            </div>
          </fieldset>
        </label>

        <label htmlFor="file">
          <div>File</div>

          <input id="file" name="file" type="file" />
        </label>

        <button type="submit">Import</button>
      </form>
    </div>
  );
};

export default SettingsImportPage;
