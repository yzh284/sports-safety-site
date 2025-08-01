export const metadata = {
  title: '运动保护科普小站',
  description: '介绍运动保护知识，提高运动安全意识'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
