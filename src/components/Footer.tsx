export const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6">
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Job Omondiale • Gameplay Programmer
        </p>
      </div>
    </footer>
  );
};
