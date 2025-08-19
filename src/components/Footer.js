export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-center py-6 text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} The Game Store. All rights reserved.</p>
      <p className="mt-2">
        Made with ❤️ | Trusted Rummy App Recommendations
      </p>
    </footer>
  );
}
