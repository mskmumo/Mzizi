export const Footer = () => (
  <footer className="border-t border-[#f0dccc] bg-[#fffaf5]">
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
      <div>
        <p className="text-lg font-semibold text-[#2d1c12]">Mizizi</p>
        <p className="text-sm text-[#5c4435]">
          Celebrating Kenya&apos;s living heritage through immersive storytelling.
        </p>
      </div>
      <div className="space-y-2 text-sm text-[#5c4435]">
        <p>About us</p>
        <p>Contact</p>
        <p>FAQs</p>
      </div>
      <div className="space-y-2 text-sm text-[#5c4435]">
        <p>hello@mzizi.africa</p>
        <p>+254 700 123 456</p>
        <div className="flex gap-3">
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Youtube</span>
        </div>
      </div>
    </div>

    {/* Content Attribution Section */}
    <div className="border-t border-[#f0dccc] bg-[#fff8f0] py-6">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-sm font-semibold text-[#2d1c12] mb-3">Content Attribution & References</h3>
        <div className="grid md:grid-cols-2 gap-4 text-xs text-[#5c4435]">
          {/* Kamba Attribution */}
          <div className="bg-white p-4 rounded-lg border border-[#f0dccc]">
            <p className="font-semibold text-[#2d1c12] mb-2">Kamba Content</p>
            <p className="mb-1">
              <span className="font-medium">Text Sources:</span> Wikipedia and various cultural references
            </p>
            <p className="mb-1">
              <span className="font-medium">Images:</span> Various online sources
            </p>
            <p className="text-[#a1785f] italic">
              Used for educational and cultural preservation purposes
            </p>
          </div>

          {/* Kikuyu Attribution */}
          <div className="bg-white p-4 rounded-lg border border-[#f0dccc]">
            <p className="font-semibold text-[#2d1c12] mb-2">Kikuyu Content</p>
            <p className="mb-1">
              <span className="font-medium">Text Sources:</span> Various online cultural references
            </p>
            <p className="mb-1">
              <span className="font-medium">Images:</span> Google Images search
            </p>
            <p className="text-[#a1785f] italic">
              Used for educational and cultural preservation purposes
            </p>
          </div>
        </div>
        <p className="text-xs text-[#a1785f] mt-4 text-center">
          This is an educational project for cultural preservation. For content concerns, please contact us.
        </p>
      </div>
    </div>

    <div className="border-t border-[#f0dccc] py-4 text-center text-xs text-[#a1785f]">
      © {new Date().getFullYear()} Mizizi Cultural Archives. All rights reserved.
    </div>
  </footer>
);


