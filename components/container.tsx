export function Container({
  children,
  id,
  className = ""
}: Readonly<{
  children: React.ReactNode;
  id?: string;
  className?: string;
}>) {
  return (
    <main id={id} className={`mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </main>
  );
}
