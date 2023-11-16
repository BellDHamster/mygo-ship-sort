dataSetVersion = "2023-16-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
    name: "Filter by Ship within Band",
    key: "bands",
    tooltip: "Check this to restrict to certain bands.",
    checked: false,
    sub: [
      { name: "MyGo!!!!!", key: "mygo" },
      { name: "Ave Mujica", key: "ave" },
      { name: "CRYCHIC", key: "cryc" },
      { name: "ข้ามวง", key: "inter"},
    ]
  },
  {
    name: "Filter by Position (If you don't want to fix position pls pick one)",
    key: "positions",
    tooltip: "Check this to restrict to certain positions.",
    checked: false,
    sub: [
      { name: "AxB", key: "ab" },
      { name: "BxA", key: "ba" },
    ]
  },
  {
    name: "Filter by Ship characters",
    key: "char",
    tooltip: "Check this to restrict to certain characters.",
    checked: false,
    sub: [
      { name: "Anon", key: "an" },
      { name: "Soyo", key: "so" },
      { name: "Taki", key: "ta" },
      { name: "Tomori", key: "to"},
      { name: "Raana", key: "ra"},
      { name: "Sakiko", key: "sa"},
      { name: "Uika", key: "ui"},
      { name: "Umiri", key: "um"},
      { name: "Mutsumi", key: "mu"},
      { name: "Nyamu", key: "ny"},
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Soyotaki",
    img: "Soyotaki.png",
    opts: {
      bands: ["mygo","cryc"],
      positions: ["ab"],
      char: ["so","ta"]
    }
  },
    {
    name: "TakiSoyo",
    img: "TakiSoyo.png",
    opts: {
      bands: ["mygo","cryc"],
      positions: ["ba"],
      char: ["so","ta"]
    }
  },
    {
    name: "NyamuSaki",
    img: "NyamuSaki.jpg",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["ny","sa"]
    }
  },
    {
    name: "SakiNyamu",
    img: "SakiNyamu.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["ny","sa"]
    }
  },
    {
    name: "RaanaMatcha",
    img: "RaanaMatcha.jpg",
    opts: {
      bands: ["mygo"],
      positions: ["ab"],
      char: ["ra"]
    }
  },
    {
    name: "MatchaRaana",
    img: "MatchaRaana.jpg",
    opts: {
      bands: ["mygo"],
      positions: ["ba"],
      char: ["ra"]
    }
  },
    {
    name: "SoyoSaki",
    img: "SoyoSaki.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ab"],
      char: ["so","sa"]
    }
  },
    {
    name: "SakiSoyo",
    img: "SakiSoyo.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ba"],
      char: ["so","sa"]
    }
  },
    {
    name: "MutsuSoyo",
    img: "MutsuSoyo.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ab"],
      char: ["so","mu"]
    }
  },
    {
    name: "SoyoMutsu",
    img: "SoyoMutsu.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ba"],
      char: ["so","mu"]
    }
  },
    {
    name: "TomoriUika",
    img: "TomoriUika.png",
    opts: {
      bands: ["inter"],
      positions: ["ab"],
      char: ["to","ui"]
    }
  },
    {
    name: "UikaTomori",
    img: "UikaTomori.png",
    opts: {
      bands: ["inter"],
      positions: ["ba"],
      char: ["to","ui"]
    }
  },
    {
    name: "AnonSoyo",
    img: "AnonSoyo.jpg",
    opts: {
      bands: ["mygo"],
      positions: ["ab"],
      char: ["an","so"]
    }
  },
    {
    name: "SoyoAnon",
    img: "SoyoAnon.png",
    opts: {
      bands: ["mygo"],
      positions: ["ba"],
      char: ["an","so"]
    }
  },
    {
    name: "TakiAnon",
    img: "TakiAnon.jpg",
    opts: {
      bands: ["mygo"],
      positions: ["ab"],
      char: ["ta","an"]
    }
  },
    {
    name: "AnonTaki",
    img: "AnonTaki.png",
    opts: {
      bands: ["mygo"],
      positions: ["ba"],
      char: ["ta","an"]
    }
  },
    {
    name: "TakiTomo",
    img: "TakiTomo.png",
    opts: {
      bands: ["mygo"],
      positions: ["ab"],
      char: ["ta","to"]
    }
  },
    {
    name: "TomoTaki",
    img: "TomoTaki.png",
    opts: {
      bands: ["mygo"],
      positions: ["ba"],
      char: ["ta","to"]
    }
  },
    {
    name: "AnonTomo",
    img: "AnonTomo.jpg",
    opts: {
      bands: ["mygo"],
      positions: ["ab"],
      char: ["to","an"]
    }
  },
    {
    name: "TomoAnon",
    img: "TomoAnon.png",
    opts: {
      bands: ["mygo"],
      positions: ["ba"],
      char: ["to","an"]
    }
  },
    {
    name: "TomoSoyo",
    img: "TomoSoyo.png",
    opts: {
      bands: ["mygo"],
      positions: ["ab"],
      char: ["to","so"]
    }
  },
    {
    name: "SoyoTomo",
    img: "SoyoTomo.png",
    opts: {
      bands: ["mygo"],
      positions: ["ba"],
      char: ["to","so"]
    }
  },
    {
    name: "AnonSaki",
    img: "AnonSaki.jpg",
    opts: {
      bands: ["inter"],
      positions: ["ab"],
      char: ["an","sa"]
    }
  },
    {
    name: "SakiAnon",
    img: "SakiAnon.png",
    opts: {
      bands: ["inter"],
      positions: ["ba"],
      char: ["an","sa"]
    }
  },
    {
    name: "NyamuUika",
    img: "NyamuUika.jpg",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["ny","ui"]
    }
  },
    {
    name: "UikaNyamu",
    img: "UikaNyamu.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["ny","ui"]
    }
  },
    {
    name: "UikaUmiri",
    img: "UikaUmiri.jpg",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["um","ui"]
    }
  },
    {
    name: "UmiriUika",
    img: "UmiriUika.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["um","ui"]
    }
  },
    {
    name: "TakiUmi",
    img: "TakiUmi.png",
    opts: {
      bands: ["inter"],
      positions: ["ab"],
      char: ["um","ta"]
    }
  },
      {
    name: "UmiTaki",
    img: "UmiTaki.png",
    opts: {
      bands: ["inter"],
      positions: ["ba"],
      char: ["um","ta"]
    }
  },
      {
    name: "UikaSaki",
    img: "UikaSaki.png",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["sa","ui"]
    }
  },
    {
    name: "SakiUika",
    img: "SakiUika.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["sa","ui"]
    }
  },
    {
    name: "AnonUika",
    img: "AnonUika.png",
    opts: {
      bands: ["inter"],
      positions: ["ab"],
      char: ["an","ui"]
    }
  },
    {
    name: "UikaAnon",
    img: "UikaAnon.png",
    opts: {
      bands: ["inter"],
      positions: ["ba"],
      char: ["an","ui"]
    }
  },
      {
    name: "NyamuAnon",
    img: "NyamuAnon.jpg",
    opts: {
      bands: ["inter"],
      positions: ["ab"],
      char: ["an","ny"]
    }
  },
      {
    name: "AnonNyamu",
    img: "AnonNyamu.png",
    opts: {
      bands: ["inter"],
      positions: ["ba"],
      char: ["an","ny"]
    }
  },
      {
    name: "SakiMutsu",
    img: "SakiMutsu.jpg",
    opts: {
      bands: ["ave","cryc"],
      positions: ["ab"],
      char: ["sa","mu"]
    }
  },
      {
    name: "MutsuSaki",
    img: "MutsuSaki.png",
    opts: {
      bands: ["ave","cryc"],
      positions: ["ba"],
      char: ["sa","mu"]
    }
  },
      {
    name: "MutsuTaki",
    img: "MutsuTaki.jpg",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ab"],
      char: ["ta","mu"]
    }
  },
      {
    name: "TakiMutsu",
    img: "TakiMutsu.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ba"],
      char: ["ta","mu"]
    }
  },
      {
    name: "MutsuUika",
    img: "MutsuUika.png",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["ui","mu"]
    }
  },
      {
    name: "UikaMutsu",
    img: "UikaMutsu.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["ui","mu"]
    }
  },
      {
    name: "AnonUmiri",
    img: "AnonUmiri.png",
    opts: {
      bands: ["inter"],
      positions: ["ab"],
      char: ["an","um"]
    }
  },
      {
    name: "UmiriAnon",
    img: "UmiriAnon.png",
    opts: {
      bands: ["inter"],
      positions: ["ba"],
      char: ["an","um"]
    }
  },
      {
    name: "MutsuNyamu",
    img: "MutsuNyamu.png",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["mu","ny"]
    }
},
      {
    name: "NyamuMutsu",
    img: "NyamuMutsu.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["mu","ny"]
    }
  },
      {
    name: "UmiNyamu",
    img: "UmiNyamu.png",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["um","ny"]
    }
},
      {
    name: "NyamuUmi",
    img: "NyamuUmi.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["um","ny"]
    }
},
      {
    name: "SakiNyamu",
    img: "SakiNyamu.png",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["sa","ny"]
    }
},
      {
    name: "NyamuSaki",
    img: "NyamuSaki.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["sa","ny"]
    }
  },
      {
    name: "MutsuUmiri",
    img: "MutsuUmiri.png",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["mu","um"]
    }
 },      
      {
    name: "UmiriMutsu",
    img: "UmiriMutsu.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["mu","um"]
    }
  },
      {
    name: "SakiTaki",
    img: "SakiTaki.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ab"],
      char: ["sa","ta"]
    }
  },      
      {
    name: "TakiSaki",
    img: "TakiSaki.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ba"],
      char: ["sa","ta"]
    }
  },
      {
    name: "TomoMutsu",
    img: "TomoMutsu.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ab"],
      char: ["mu","to"]
    }
  },      
      {
    name: "MutsuTomo",
    img: "MutsuTomo.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ba"],
      char: ["mu","to"]
    }
  },
      {
    name: "UmiSaki",
    img: "UmiSaki.png",
    opts: {
      bands: ["ave"],
      positions: ["ab"],
      char: ["sa","um"]
    }
 },      
      {
    name: "SakiUmi",
    img: "SakiUmi.png",
    opts: {
      bands: ["ave"],
      positions: ["ba"],
      char: ["sa","um"]
    }
  },
      {
    name: "TakiUika",
    img: "TakiUika.png",
    opts: {
      bands: ["inter"],
      positions: ["ab"],
      char: ["ui","ta"]
    }
  },      
      {
    name: "UikaTaki",
    img: "UikaTaki.png",
    opts: {
      bands: ["inter"],
      positions: ["ba"],
      char: ["ui","ta"]
    }
  },
      {
    name: "TomoSaki",
    img: "TomoSaki.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ab"],
      char: ["sa","to"]
    }
  },      
      {
    name: "SakiTomo",
    img: "SakiTomo.png",
    opts: {
      bands: ["inter","cryc"],
      positions: ["ba"],
      char: ["sa","to"]
    }
  }
];
