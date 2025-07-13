export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="px-5 py-3.5 lg:px-10">{children}</div>;
}