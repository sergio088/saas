interface buttonprops {
  onClick: () => void;
}

const ButtonContinuar = ({ onClick }: buttonprops) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-blue-500 p-2 w-full text-white rounded hover:bg-blue-600"
    >
      Continuar
    </button>
  );
};

export default ButtonContinuar;
