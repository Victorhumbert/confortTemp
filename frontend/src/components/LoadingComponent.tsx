export const LoadingComponent = ({ text }: { text: string }) => {
  return (
    <div className="flex m-auto p-4 rounded-lg shadow">
      <h1 className="text-2xl text-center my-12">
        {text ? text : "Carregando..."}
      </h1>
    </div>
  );
};
