const Footer = () => {
  return (
    <footer className="py-6 w-full overflow-x-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6 w-full max-w-[100vw]">
        <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          Built by <a href="https://bit.ly/sriport" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Sri</a>,
          Designed and developed with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
