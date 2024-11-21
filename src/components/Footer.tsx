const Footer = () => {
  return (
    <footer className="bg-black h-[18rem] flex justify-center items-center p-8">
      <div className="container mx-auto grid grid nbv-cols-3 gap-4">
        <div className="text-left">
          <h1 className="text-white text-2xl font-bold">Gabriel Zimmermann</h1>
          <p className="text-yellow-500 text-base">Reliable, efficient, and always ready for new challenges.</p>
        </div>

        <div className="text-center">
          <h1 className="text-white text-sm mb-4">gabriel.zimmermann4@icloud.com</h1>
          <div className="flex justify-center space-x-4">

            <a
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADg6uioBvBf5YnkoHmYlZ8m1y_TgxS6H4BY&keywords=gabriel%20zimmermann&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b0f8a82a-85a7-4023-907d-43f36d983fe6&sid=j%40I&spellCorrectionEnabled=false"
              target="_blank"
              className="inline-block bg-yellow-500 text py-2 px-6 rounded-md hover:bg-yellow-400 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="text-right">
          <h1 className="text-white text-sm">Phone: +41 76 302 29 12</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
