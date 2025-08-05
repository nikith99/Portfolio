const Footer = () => {
  return (
    <footer className="py-6 w-full overflow-x-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6 w-full max-w-[100vw]">
        <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          Designed and developed by Nikith with ❤️ by <a href="https://reactwind.com" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">ReactWind</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
