# React Native Assessment

## TODO

- [ ] Prepare workspace for creating a react js responsive web app. Document the steps.

- [ ] Take a template of choice. The app that you are going to create will display content from a news api json. For sake of simplicity, Cache JSON while building app.

- [ ] Add a splash screen with image of your choice saved from phone

- [ ] Add Home screen with your welcome note. Take a quote that you like.

- [ ] Create a button on Home Screen “Show News”. On click of this button, show screen with news content.

- [ ] News API JSON Content and expected outcome.

- [ ] Bundle code and share with github.

## Sample JSON for reference

```json
{
 "articles": [{
   "source": {
    "id": null,
    "name": "Thatsnerdalicious.com"
   },
   "author": "Andrew Cody",
   "title": "Top 10 Best mirror phone mount Reviews",
   "description": "Top 10 Best mirror phone mount in 2021 Comparison Table Are you looking for top 10 great mirror phone mount ... \nRead moreTop 10 Best mirror phone mount Reviews\nThe post Top 10 Best mirror phone mount Reviews appeared first on That's Nerdalicious.",
   "url": "https://thatsnerdalicious.com/top-10-best-mirror-phone-mount-reviews/",
   "urlToImage": "https://m.media-amazon.com/images/I/41vkHdA3w8S._AC_.jpg",
   "publishedAt": "2021-08-06T23:17:50Z",
   "content": "Top 10 Best mirror phone mount in 2021 Comparison Table\r\nBestseller No. 1\r\nHula+ Shower/Mirror Phone Holder/Mount/Stand. Reusable Non-Residue Mount for Bathroom/Kitchen/Wall. Compatible with All Phon… [+15376 chars]"
  },
  {
   "source": {
    "id": "reuters",
    "name": "Reuters"
   },
   "author": "Ernest Scheyder",
   "title": "N. Carolina county slaps moratorium on mining as Piedmont Lithium plans project - Reuters",
   "description": "A North Carolina county imposed a 60-day mining moratorium on Friday, giving officials time to rework local regulations before Piedmont Lithium Inc <a href=\"https://www.reuters.com/companies/PLL.O\" target=\"_blank\">(PLL.O)</a> applies for a necessary zoning va…",
   "url": "https://www.reuters.com/world/us/n-carolina-county-slaps-moratorium-mining-piedmont-lithium-plans-project-2021-08-06/",
   "urlToImage": "https://www.reuters.com/resizer/rAdgsGeRsle92qQobCslmk2Wygw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JEAVEYLAW5OOPOPAW76HQFN45Y.jpg",
   "publishedAt": "2021-08-06T22:54:00Z",
   "content": "Aug 6 (Reuters) - A North Carolina county imposed a 60-day mining moratorium on Friday, giving officials time to rework local regulations before Piedmont Lithium Inc (PLL.O) applies for a necessary z… [+1877 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Yahoo Entertainment"
   },
   "author": "Reuters",
   "title": "North Carolina county slaps moratorium on mining as Piedmont Lithium plans project",
   "description": "A North Carolina county imposed a 60-day mining moratorium on Friday, giving officials time to rework local regulations before Piedmont Lithium Inc applies for a necessary zoning variance. Commissioners in Gaston County, west of Charlotte, unanimously approve…",
   "url": "https://finance.yahoo.com/news/north-carolina-county-slaps-moratorium-225025923.html",
   "urlToImage": "https://s.yimg.com/uu/api/res/1.2/18Qc56VPBurrRDYOcIK9DQ--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters-finance.com/ca8c3b3299a6ad6406b62d1d7d8f83cb",
   "publishedAt": "2021-08-06T22:50:25Z",
   "content": "By Ernest Scheyder\r\n(Reuters) - A North Carolina county imposed a 60-day mining moratorium on Friday, giving officials time to rework local regulations before Piedmont Lithium Inc applies for a neces… [+1824 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Yahoo Entertainment"
   },
   "author": "Ernest Scheyder",
   "title": "North Carolina county slaps moratorium on mining as Piedmont Lithium plans project",
   "description": "A North Carolina county imposed a 60-day mining moratorium on Friday, giving officials time to rework local regulations before Piedmont Lithium Inc applies...",
   "url": "https://news.yahoo.com/north-carolina-county-slaps-moratorium-225025203.html",
   "urlToImage": "https://s.yimg.com/uu/api/res/1.2/IhO9d79q_.xxmoeeyCnreA--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/b71053017c746609e23fb72900f94666",
   "publishedAt": "2021-08-06T22:50:25Z",
   "content": "By Ernest Scheyder\r\n(Reuters) - A North Carolina county imposed a 60-day mining moratorium on Friday, giving officials time to rework local regulations before Piedmont Lithium Inc applies for a neces… [+1824 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "CarScoops"
   },
   "author": "Michael Gauthier",
   "title": "New Book Says Tesla CEO Elon Musk Was Prone To Screaming At Employees And Berating Them",
   "description": "Reports of Elon Musk’s brash behavior are nothing new, but a book…",
   "url": "https://www.carscoops.com/2021/08/new-book-says-tesla-ceo-elon-musk-was-prone-to-screaming-at-employees-and-berating-them/",
   "urlToImage": "https://www.carscoops.com/wp-content/uploads/2021/08/Elon-Musk.jpg",
   "publishedAt": "2021-08-06T22:30:17Z",
   "content": "Reports of Elon Musks brash behavior are nothing new, but a book suggests the outspoken executive was downright abusive to some employees.\r\nAccording to Power Play: Tesla, Elon Musk and the Bet of th… [+2063 chars]"
  },
  {
   "source": {
    "id": "abc-news",
    "name": "ABC News"
   },
   "author": "ABC News",
   "title": "WATCH: Researchers observe Titanic's deterioration",
   "description": "An undersea exploration company planned an annual expedition to the Titanic wreck site to monitor the sunken ocean liner's deterioration.",
   "url": "https://abcnews.go.com/Technology/video/researchers-observe-titanics-deterioration-79325709",
   "urlToImage": "https://s.abcnews.com/images/Technology/210806_abc_social_titanic_hpMain_16x9_992.jpg",
   "publishedAt": "2021-08-06T22:23:59Z",
   "content": "<li>Now Playing: New video shows bus crashing into cars, jumping curb, slamming into building\r\n</li><li>Now Playing: New images show massive damage in Mexican train wreck that killed at least 24\r\n</l… [+1214 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Nationalcybersecurity.com"
   },
   "author": "Angela Dennis",
   "title": "Cryptocurrency pump-and-dump schemes: Everything you should know about these scams | #socialmedia | #cybersecurity | #infosecurity | #hacker",
   "description": "World Largest Source Of Security News.",
   "url": "https://nationalcybersecurity.com/cryptocurrency-pump-and-dump-schemes-everything-you-should-know-about-these-scams-socialmedia-cybersecurity-infosecurity-hacker/",
   "urlToImage": "",
   "publishedAt": "2021-08-06T22:17:00Z",
   "content": "Getty Images\r\nCryptocurrency fans view Bitcoin, Ethereum and Dogecoin as the future of money for the globe. The underlying blockchain technology allows crypto to work by creating a digital ledger tha… [+7291 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Seeking Alpha"
   },
   "author": "Euphoric Investment",
   "title": "Palantir: The Next Big Player In Enterprise Data",
   "description": "Palantir aims to be the world’s premier Software-as-a-Service (SaaS) company for both public and private sector clients. Read more about PLTR stock here.",
   "url": "https://seekingalpha.com/article/4446250-palantir-the-next-big-player-in-enterprise-data",
   "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1286642964/large_image_1286642964.jpg",
   "publishedAt": "2021-08-06T22:10:58Z",
   "content": "NicoElNino/iStock via Getty Images\r\n*This article was written by Euphoric Investment authors Aayra Aamer, Rohan George, Rinnah Sanders, and Humna Sheikh\r\n In a world where technology is advancing fas… [+14006 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "CNET"
   },
   "author": "Oscar Gonzalez",
   "title": "Cryptocurrency pump-and-dump schemes: Everything you should know about these scams - CNET",
   "description": "Don't be the victim of a rug pull.",
   "url": "https://www.cnet.com/personal-finance/investing/cryptocurrency-pump-and-dump-schemes-everything-you-should-know-about-these-scams/",
   "urlToImage": "https://www.cnet.com/a/img/8BbIHtexWHnd4Z6uZ1xs3j5TeiY=/1200x630/2021/07/23/fd1f2c12-d828-4d67-a652-c16e79a9dbc5/gettyimages-1163756528.jpg",
   "publishedAt": "2021-08-06T22:00:07Z",
   "content": "Getty Images\r\nCryptocurrency fans view Bitcoin, Ethereum and Dogecoin as the future of money for the globe. The underlying blockchain technology allows crypto to work by creating a digital ledger tha… [+7281 chars]"
  },
  {
   "source": {
    "id": "cbs-news",
    "name": "CBS News"
   },
   "author": "Khristopher J. Khristopher J.",
   "title": "Former Tesla worker who alleged racial abuse awarded $1 million",
   "description": "Melvin Berry's case is one of three racial discrimination cases filed by former workers against the electric car maker.",
   "url": "https://www.cbsnews.com/news/tesla-million-melvin-berry-fremont-california-n-word-racial-discrimination/",
   "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2021/08/06/e845ea45-c977-4b55-82f4-59c1756adc83/thumbnail/1200x630/397f12588721aa21ce512ad665f93172/tesla.jpg",
   "publishedAt": "2021-08-06T21:36:39Z",
   "content": "Tesla has been ordered to pay roughly $1 million to a former employee who filed a legal complaint alleging he was called the N-word while working in the electric automaker's factory in California.\r\nM… [+3623 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Investor's Business Daily"
   },
   "author": "Investor's Business Daily",
   "title": "Dow Jones Futures: Market Rally Hits Highs As Apple, Tesla, Square Lead 6 Stocks Near Buy Points; What To Do Now",
   "description": "The market rally is at highs, but tricky to navigate. Apple, Tesla and Square are near buy points. BioNTech earnings loom.",
   "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rally-apple-tesla-square-near-buy-points-biontech-trade-desk-earnings/",
   "urlToImage": "https://www.investors.com/wp-content/uploads/2018/03/Sailing-Couple.jpg",
   "publishedAt": "2021-08-06T21:36:36Z",
   "content": "Dow Jones futures will open for trading Sunday afternoon, along with S&amp;P 500 futures and Nasdaq futures. The major indexes all hit record highs last week as the stock market rally advanced modest… [+9662 chars]"
  },
  {
   "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
   },
   "author": "Mayank Mohanti",
   "title": "Elon Musk Says Very High Import Duty Delaying Tesla India Launch",
   "description": "Tesla CEO Elon Musk has hinted that the company may open up a factory in India to sell locally assembled Tesla electric vehicles.                         ReutersBut for that plan to materialise, the billionaire entrepreneur is hoping that the imported Tesla c…",
   "url": "https://www.indiatimes.com/technology/news/tesla-india-import-duty-elon-musk-546670.html",
   "urlToImage": "https://im.indiatimes.in/content/2021/Aug/Collage_610d8f95b29e4.jpg",
   "publishedAt": "2021-08-06T21:15:52Z",
   "content": "Tesla CEO Elon Musk has hinted that the company may open up a factory in India to sell locally assembled Tesla electric vehicles. \r\nReuters\r\nBut for that plan to materialise, the billionaire entrepre… [+5324 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Motley Fool Australia"
   },
   "author": "Tristan Harrison",
   "title": "3 great ASX tech shares that might be good buys",
   "description": "ASX tech shares like Xero could be good options to consider.\nThe post 3 great ASX tech shares that might be good buys appeared first on The Motley Fool Australia.",
   "url": "https://www.fool.com.au/2021/08/07/3-great-asx-tech-shares-that-might-be-good-buys/",
   "urlToImage": "https://www.fool.com.au/wp-content/uploads/2020/10/asx-shares-cloud-tech.jpg",
   "publishedAt": "2021-08-06T21:09:00Z",
   "content": "ASX tech shares could be a smart place to look for opportunities. There are some great businesses that might be quality ideas to own for the coming years.\r\nTechnology businesses are often the ones in… [+3014 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Neilpatel.com"
   },
   "author": "Neil Patel",
   "title": "7 Tips to Highlight Product Features on Your Website",
   "description": "Whether your customers are shopping for tennis shoes or a marketing automation tool, they care about your product’s features. Features (along with price and design) are one of the main factors people consider when comparing products.  Would you buy a computer…",
   "url": "https://neilpatel.com/blog/product-features/",
   "urlToImage": "https://neilpatel.com/wp-content/uploads/2021/08/TpsToHighlightProductFeaturesOnYourWebsite-700x420.jpg",
   "publishedAt": "2021-08-06T21:00:00Z",
   "content": "Whether your customers are shopping for tennis shoes or a marketing automation tool, they care about your products features. Features (along with price and design) are one of the main factors people … [+12341 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "CNET"
   },
   "author": "Ian Sherr",
   "title": "Here's why your iPhone may never be made in the USA",
   "description": "\"Made in America\" is rare, even though polls show Americans want it.",
   "url": "https://www.cnet.com/features/here-is-why-your-iphone-may-never-be-made-in-the-usa/",
   "urlToImage": "https://www.cnet.com/a/img/resize/580547699d8d1ea2acdba953b54af63e444501ac/hub/2019/05/14/905003f8-d483-41c1-be23-61b515f70d0e/all-the-iphones-0070.jpg?auto=webp&fit=crop&height=675&width=1200",
   "publishedAt": "2021-08-06T20:54:00Z",
   "content": "The 15-minute video begins with upbeat music against a title slide that reads \"We Are Manufacturing.\" It cuts to a shot of a clear blue sky, with three flags ruffling in the breeze. There's the Stars… [+26043 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "This is Money"
   },
   "author": "Ray Massey Motoring",
   "title": "RAY MASSEY enjoys his drive in Elon Musk's Tesla Model 3",
   "description": "There can be no denying the Californian company has shaken up the market, but the model currently only responds only to U.S. English - they're still working on 'British English'.",
   "url": "https://www.thisismoney.co.uk/money/cars/article-9869651/RAY-MASSEY-enjoys-drive-Elon-Musks-Tesla-Model-3.html",
   "urlToImage": "https://i.dailymail.co.uk/1s/2021/08/06/18/46376485-0-image-a-13_1628271516129.jpg",
   "publishedAt": "2021-08-06T20:50:35Z",
   "content": "Few car firms have had a bigger impact than Elon Musk's Tesla. And with mainstream motor manufacturers now producing some decent electric car competition, there can be no denying the Californian comp… [+3813 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Autoblog"
   },
   "author": "Jonathon Ramsey",
   "title": "VW CEO Herbert Diess is not impressed by charging partner Ionity",
   "description": "Filed under:\nGreen,Volkswagen,Green Driving,Electric,Infrastructure\n\nContinue reading VW CEO Herbert Diess is not impressed by charging partner Ionity\n\nVW CEO Herbert Diess is not impressed by charging partner Ionity originally appeared on Autoblog on Fri, 6 …",
   "url": "https://www.autoblog.com/2021/08/06/vw-ceo-herbert-diess-ionity-charging-station-rant/",
   "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/crop/1280x720+0+0/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2021/08/06155324/diess_vw_ionity_complaint.jpg",
   "publishedAt": "2021-08-06T20:47:00Z",
   "content": "Corporate gripes don't usually end up on social media, because everyone's got too much to lose; just the public perception of executives sniping accusations like \"The Real Housewives\" can be bad for … [+4547 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Yahoo Entertainment"
   },
   "author": "BBC",
   "title": "US stock exchange sets diversity rules for listed companies",
   "description": "The Nasdaq index will require all its listed companies to have diverse boards, or explain why they do not.",
   "url": "https://news.yahoo.com/us-stock-exchange-sets-diversity-204351077.html",
   "urlToImage": "https://s.yimg.com/uu/api/res/1.2/_G9LLE5tpvKPHDNFX5vQCQ--~B/aD01NDk7dz05NzY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/bbc_us_articles_995/49f8e048eb87003bd615bc27a9e44442",
   "publishedAt": "2021-08-06T20:43:51Z",
   "content": "Nasdaq's head offices in New York City\r\nAmerica's second largest stock exchange has said it will set binding gender and diversity targets for its listed companies.\r\nFirms on the Nasdaq, which include… [+2225 chars]"
  },
  {
   "source": {
    "id": "bbc-news",
    "name": "BBC News"
   },
   "author": "https://www.facebook.com/bbcnews",
   "title": "US stock exchange sets diversity rules for listed companies",
   "description": "The Nasdaq index will require all its listed companies to have diverse boards, or explain why they do not.",
   "url": "https://www.bbc.co.uk/news/business-58123730",
   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/130A7/production/_119819977_gettyimages-1271946002.jpg",
   "publishedAt": "2021-08-06T20:43:50Z",
   "content": "image captionNasdaq's head offices in New York City\r\nAmerica's second largest stock exchange has said it will set binding gender and diversity targets for its listed companies.\r\nFirms on the Nasdaq, … [+2223 chars]"
  },
  {
   "source": {
    "id": null,
    "name": "Seeking Alpha"
   },
   "author": "Adam Hamilton",
   "title": "Big U.S. Stocks' Q2 2021 Fundamentals",
   "description": "Despite reporting truly-spectacular Q2’21 results, the big US stocks’ valuations remain deep in dangerous bubble territory.",
   "url": "https://seekingalpha.com/article/4446207-big-us-stocks-q221-fundamentals",
   "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/487259374/large_image_487259374.jpg",
   "publishedAt": "2021-08-06T20:42:24Z",
   "content": "Petrovich9/iStock via Getty Images\r\nThe US stock markets continue to power ever higher to an endless series of new records. Leading the way are the big US stocks, with extraordinary gains fueled by t… [+22041 chars]"
  }
 ]
}
```
