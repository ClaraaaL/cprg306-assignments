import NewItem from "./new-item";

export default function Page() {
  return (
    <main>
      <h1 className="text-white text-center">Create a New Item</h1>
      <div class="flex justify-center w-full">
        <NewItem />
      </div>
    </main>
  );
}
