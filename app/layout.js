import "./styles/globals.css";


export const metadata = {
  title: "Prueba Tecnica",
  description: "Desarrallo de prueba tecnica para Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
