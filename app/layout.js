import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | gggsgggg",
    default: "gg.......",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
