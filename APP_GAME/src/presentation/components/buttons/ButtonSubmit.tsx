interface PropsButton {
  text: string;
}
export const ButtonSubmit = ({ text }: PropsButton) => {
  return (
    <button
      type="button"
      className="flex bg-primary inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal 
    dark:text-white text-slate-800 shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    >
      <span className="inline-block noto-sans-display-font dark:text-white text-white">{text}</span>
    </button>
  );
};
