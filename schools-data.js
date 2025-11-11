const schoolsData = [
  {
    "name": "Abc Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "1st Street, Sector SH22, Plot 8 - Al Shamkha City - Abu Dhabi",
    "lat": 24.354382553398235,
    "lon": 54.70615073861168
  },
  {
    "name": "Abdulla Bin Al Zubair Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "5JPG+QWP - Al Maqam - Shabiyat Al Maqam - Abu Dhabi",
    "lat": 24.207574415065523,
    "lon": 55.63361013578145
  },
  {
    "name": "Abdulla Bin Otaiba School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "8H95+6XC - Mohamed Bin Zayed City - Z23 - Abu Dhabi",
    "lat": 24.318337898430116,
    "lon": 54.56049456260779
  },
  {
    "name": "Abu Dhabi Grammar School",
    "school_type": "Private",
    "curriculum_type": "Canadian",
    "address": "Al Zahiyah St - Al Zahiyah - E16 01 - Abu Dhabi",
    "lat": 24.49236197582331,
    "lon": 54.381306951523825
  },
  {
    "name": "Abu Dhabi Indian School - Muroor",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "Al - 23rd St., Salama Bint Butti St - Muroor Rd - Abu Dhabi",
    "lat": 24.445202185697138,
    "lon": 54.410854274825255
  },
  {
    "name": "Abu Dhabi Indian School - Wathba",
    "school_type": "Private",
    "curriculum_type": "CBSE",
    "address": "Al Sahl St - Al Wathba - Al Wathbah South - Abu Dhabi",
    "lat": 24.263468119541468,
    "lon": 54.6588847459864
  },
  {
    "name": "Abu Dhabi International Private School - Karamah",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Al Karamah St,Al Rowda Area - 110 Bab Al Nabil St - Al Manhal - Abu Dhabi",
    "lat": 24.468718068778784,
    "lon": 54.36348984693304
  },
  {
    "name": "Abu Dhabi Island International Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "7P63+6FG - Al Tiwayya - Eidan Al Ridda - Abu Dhabi",
    "lat": 24.260830474035227,
    "lon": 55.70402173249093
  },
  {
    "name": "Ain Al Fayedha",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "3MRV+3MX - Unnamed Road - Ain Al Faydah - Ain Al Fayda - Abu Dhabi",
    "lat": 24.090376694286693,
    "lon": 55.69470256501012
  },
  {
    "name": "Ain Al Khaleej Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.19427612061243,
    "lon": 55.71298483433346
  },
  {
    "name": "Al Adhwa Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "6P2G+845 - Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.20107872769125,
    "lon": 55.7248634698737
  },
  {
    "name": "Al Ahd School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "115 Barqa Awwad St - Bani Yas - Baniyas East - Abu Dhabi",
    "lat": 24.299192329397343,
    "lon": 54.64633274783128
  },
  {
    "name": "Al Ain American Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Building 7 - 'Asharij - Abu Dhabi",
    "lat": 24.202892608513892,
    "lon": 55.65230250918737
  },
  {
    "name": "Al Ain British Academy",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "212 Al Salam St - Central District - Al Nyadat - Abu Dhabi",
    "lat": 24.21531322921957,
    "lon": 55.78255965579229
  },
  {
    "name": "Al Ain English Speaking School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Etisalat - Khalid Bin Sultan St - Al Muwaij'i - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.192717957321186,
    "lon": 55.70282731103107
  },
  {
    "name": "Al Ain Juniors School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.19977039861579,
    "lon": 55.725109743554476
  },
  {
    "name": "Al Andalus Private Academy",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.201081782521214,
    "lon": 55.72722942268247
  },
  {
    "name": "Al Awael Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Al Rayhani St - Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.20095816865005,
    "lon": 55.72483575336162
  },
  {
    "name": "Al Azm School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "City -Block 1C - Al Falah - Abu Dhabi",
    "lat": 24.457560365250767,
    "lon": 54.739065818999954
  },
  {
    "name": "Al Bashair Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "8GCM+3MH - Mohamed Bin Zayed City - ME12 - Abu Dhabi",
    "lat": 24.320486256878684,
    "lon": 54.53474910918979
  },
  {
    "name": "Al Basma British School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Behind Deerfields Mall - 12 Al Houri St - Al Bahyah - Al Bahyah Old - Abu Dhabi",
    "lat": 24.524842618032114,
    "lon": 54.66606999812949
  },
  {
    "name": "Al Bateen Scientific Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Near Main Bus terminal, FDF Building - 16 Sultan Bin Zayed The First St - Abu Dhabi",
    "lat": 24.468656601541724,
    "lon": 54.37870054783523
  },
  {
    "name": "Al Bayan School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "7JPW+H4Q - Bani Yas - EB9 - Abu Dhabi",
    "lat": 24.28723478609705,
    "lon": 54.648575148367506
  },
  {
    "name": "Al Bayraq School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "33 Al 'Ukayr St - Al Dhahir - Dhaher 7 - Abu Dhabi",
    "lat": 24.069849397650966,
    "lon": 55.857330253944845
  },
  {
    "name": "Al Danah School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "مدرسة الدانة - 7 شارع جَبَل الكِفَيَّات - Mohamed Bin Zayed City - Z35 - Abu Dhabi",
    "lat": 24.305064437889367,
    "lon": 54.5920045650151
  },
  {
    "name": "Al Dar Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Hili - Ugdat Al Husoon - Abu Dhabi",
    "lat": 24.31928306828876,
    "lon": 55.79350141715267
  },
  {
    "name": "Al Dhabiania Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Al Khalidiyah - W17 02 - Abu Dhabi",
    "lat": 24.46019165815285,
    "lon": 54.35607644230253
  },
  {
    "name": "Al Dhafra Private Academy",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Unnamed Road - Abu Dhabi",
    "lat": 24.282989394157877,
    "lon": 55.76760021766773
  },
  {
    "name": "Al Dhaher",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "3VC8+JRQ - Al Dhahir - Dhaher 9 - Abu Dhabi",
    "lat": 24.07189639823349,
    "lon": 55.867528071384534
  },
  {
    "name": "Al Ekhlass Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Baniyas East, Near Lulu Hyper Market - Abu Dhabi",
    "lat": 24.29213465650489,
    "lon": 54.63997294908902
  },
  {
    "name": "Al Eman Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "F99C+J5Q - Haza Bin Zayed the 1st Street (Defence Road) - Al Manhal - W14 02 - Abu Dhabi",
    "lat": 24.46933542987018,
    "lon": 54.37015266760864
  },
  {
    "name": "Al Forsan Kg",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "19 Al Rahaj St - Madinat Al Riyad - RD13 - Abu Dhabi",
    "lat": 24.353179010723352,
    "lon": 54.749920792006975
  },
  {
    "name": "Al Ghad School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "51 - 12 Razim St - Mohamed Bin Zayed City - Abu Dhabi",
    "lat": 24.3165770647475,
    "lon": 54.53593129385026
  },
  {
    "name": "Al Ghadeer Kg",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "5M67+JX5 - Unnamed Road - Al Rawdah Al Sharqiyah - Al Ifaz - Abu Dhabi",
    "lat": 24.16161744562504,
    "lon": 55.66551498035133
  },
  {
    "name": "Al Ghaf School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "Jebel Ali Village - Al Muntazah - Dubai",
    "lat": 25.03021881767933,
    "lon": 55.11409059386663
  },
  {
    "name": "Al Hosoon School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "Mezyad 2 , Alain",
    "lat": 24.049256504534444,
    "lon": 55.843376599376775
  },
  {
    "name": "Al Israa Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "6MMW+Q83 - Al Khibeesi - Al Meryal - Abu Dhabi",
    "lat": 24.234570078441052,
    "lon": 55.69644772637163
  },
  {
    "name": "Al Janaen School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "5M57+WCV - Al Rawdah Al Sharqiyah - Al Ifaz - Abu Dhabi",
    "lat": 24.160125182899307,
    "lon": 55.664113395690855
  },
  {
    "name": "Al Khalil International Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Al 'Iqabiyyah - Al Khalidiyya - Abu Dhabi",
    "lat": 24.17685755605201,
    "lon": 55.678390480351865
  },
  {
    "name": "Al Maharat Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "9MP2+9G8 قطعة P1 - مدينة شخبوط منطقة 165 - Shakhbout City - Abu Dhabi",
    "lat": 24.389837334250828,
    "lon": 54.6468202417147
  },
  {
    "name": "Al Majd School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "Al Falah - 1B - Abu Dhabi",
    "lat": 24.460560389193898,
    "lon": 54.721414392009336
  },
  {
    "name": "Al Manahel Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "41 شارع الخَرطوم - Al Muwaij'i - Al Ruwaikah - Abu Dhabi",
    "lat": 24.202010281981366,
    "lon": 55.71964750181044
  },
  {
    "name": "Al Manhal International Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Street # 25 - Al Mushrif - W47 - Abu Dhabi",
    "lat": 24.429363779269973,
    "lon": 54.410411217155236
  },
  {
    "name": "Al Marfa International School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "3F65+FW3 - E11 - Al Marfa - MR2 - Abu Dhabi",
    "lat": 24.062278295678322,
    "lon": 53.461932916155234
  },
  {
    "name": "Al Minhaj Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "F9Q8+P79 - Al Danah - Zone 1 - Abu Dhabi",
    "lat": 24.489661960237598,
    "lon": 54.365076737357
  },
  {
    "name": "Al Muneera Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Bani Yas - EB1 - Abu Dhabi",
    "lat": 24.321067805141308,
    "lon": 54.63696644967595
  },
  {
    "name": "Al Murooj Scientific Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "8GWM+MH7 - Mussafah Mohamed Bin Zayed City ME9 - Musaffah - ME9 - Abu Dhabi",
    "lat": 24.346904221385493,
    "lon": 54.53424049016255
  },
  {
    "name": "Al Mushrif Kg",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "CCQ3+F47 - Hadbat Al Za`Faranah - Zone 1 - Abu Dhabi",
    "lat": 24.438877897263325,
    "lon": 54.40345295521093
  },
  {
    "name": "Al Mustaqbal International Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "F968+5V5 - Al Manhal - W14 01 - Abu Dhabi",
    "lat": 24.46065252308677,
    "lon": 54.36784796870685
  },
  {
    "name": "Al Mutanabi",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "F9JC+J7X - Muroor Road (East Road - Al Danah - Zone 1 - Abu Dhabi",
    "lat": 24.48833362615869,
    "lon": 54.3827642782946
  },
  {
    "name": "Al Nahda National School For Boys",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "8 Al Fannah St - Al Nahyan - Zone 1 - Abu Dhabi",
    "lat": 24.45893558717882,
    "lon": 54.38617300453975
  },
  {
    "name": "Al Nahda National School For Girls",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "1 Airport Road - Al Mushrif - W52 - Abu Dhabi",
    "lat": 24.43672905916951,
    "lon": 54.40085093190855
  },
  {
    "name": "Al Nahdha School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "F95P+8MH - Al Nahyan - Zone 1 - Abu Dhabi",
    "lat": 24.459266649657913,
    "lon": 54.38711428900777
  },
  {
    "name": "Al Najah Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Mohammed Bin Zayed City - 9 Near Al Safir Mall - Abu Dhabi",
    "lat": 24.339809559169396,
    "lon": 54.53715374967627
  },
  {
    "name": "Al Narjes School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "3PQ3+C3V - Abu Dhabi - Al Ain Rd - Ain Al Faydah - Ain Al Fayda - Abu Dhabi",
    "lat": 24.088891408936277,
    "lon": 55.70297350268758
  },
  {
    "name": "Al Nayfa Kg",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "CPW7+G62 - Al Barahah St - Al Falah - 1A - Abu Dhabi",
    "lat": 24.446470284904514,
    "lon": 54.71333030366029
  },
  {
    "name": "Al Qeyam School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "Madinat Al Riyad - Street - Al Mi`Rad - Abu Dhabi",
    "lat": 24.326524734448135,
    "lon": 54.806952611955495
  },
  {
    "name": "Al Qurm School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "32nd St - Mohamed Bin Zayed City - ME16 - Abu Dhabi",
    "lat": 24.375547385342696,
    "lon": 54.53707688094249
  },
  {
    "name": "Al Rabeeh Academy",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "8H85+R4R - Mohamed Bin Zayed City - Z23 - Abu Dhabi",
    "lat": 24.320911691800923,
    "lon": 54.5640697476663
  },
  {
    "name": "Al Rabeeh School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Muroor Road - Hadbat Al Za`Faranah - E30 - Abu Dhabi",
    "lat": 24.44259502580203,
    "lon": 54.400871024532144
  },
  {
    "name": "Al Rayaheen School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "Unnamed Road - Shi'bat Al Wutah - Abu Dhabi",
    "lat": 24.13210855554461,
    "lon": 55.735711185878586
  },
  {
    "name": "Al Rayana School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "CPJM+2XC - Al Falah - 1E - Abu Dhabi",
    "lat": 24.43014863877822,
    "lon": 54.73512197695551
  },
  {
    "name": "Al Reef School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "GMRJ+J46 - Al Bahyah - Al Shahamah Old - Abu Dhabi",
    "lat": 24.565902687658813,
    "lon": 54.72282724972024
  },
  {
    "name": "Al Riyadh",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "25 Al Asmaʻi St - مدينة الرياضالعِبَيان - RD33 - Abu Dhabi",
    "lat": 24.331710002413004,
    "lon": 54.7315778625853
  },
  {
    "name": "Al Saad Indian School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "Plot –No.: 11, Street 14, Zone – Al Bateen , Sector Al Ghadeer , Al-Ain – UAE - Abu Dhabi",
    "lat": 24.201312596247284,
    "lon": 55.61018089938011
  },
  {
    "name": "Al Salam School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "CPW6+JGG - Al Falah - 1A - Abu Dhabi",
    "lat": 24.44720591840595,
    "lon": 54.70677057191493
  },
  {
    "name": "Al Sanawbar School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "5PX6+2FG - Al Muwaij'i - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.19778724635509,
    "lon": 55.71190999938004
  },
  {
    "name": "Al Seddique Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "6QJ4+2MG - Central District - Nad Al Rusas - Abu Dhabi",
    "lat": 24.23029777008745,
    "lon": 55.7570703478299
  },
  {
    "name": "Al Shohub Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Khalifa City A, Behind Police Station - Abu Dhabi",
    "lat": 24.433017806799782,
    "lon": 54.58413911899949
  },
  {
    "name": "Al Tafawwuq Al Ilmi Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "9PWM+W57 - Al Shamkhah - SH5 - Abu Dhabi",
    "lat": 24.421683723373267,
    "lon": 54.77824063144932
  },
  {
    "name": "Al Tharawat National Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "9GCV+6R2 - Mohamed Bin Zayed City - Z1 - Abu Dhabi",
    "lat": 24.370541796821183,
    "lon": 54.54539536074204
  },
  {
    "name": "Al Wafaa Kg",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "26 - 2 Al Shwayfi St - Shakhbout City - MSH2 - Abu Dhabi",
    "lat": 24.34840021058815,
    "lon": 54.632808636181146
  },
  {
    "name": "Al Walaa Kg",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "26 - 2 Al Shwayfi St - Shakhbout City - MSH2 - Abu Dhabi",
    "lat": 24.34840021058815,
    "lon": 54.632808636181146
  },
  {
    "name": "Al Watan School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "284 شارع الجَوْهَر - Shakhbout City - CityMFW-14 - Abu Dhabi",
    "lat": 24.371661652086036,
    "lon": 54.64012896501646
  },
  {
    "name": "Al Yahar Private School And Kg",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "6HH7+VJ2 - Unnamed Road - Al Aamerah - Al Rifaa - Abu Dhabi",
    "lat": 24.232601098658463,
    "lon": 55.57309220306896
  },
  {
    "name": "Al Yasat Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Sector SH 10, Plot P1 - Abu Dhabi",
    "lat": 24.39455041137443,
    "lon": 54.71090150181481
  },
  {
    "name": "Alhamdaniya Grand Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "5MGG+8CP - Ahmad Shawqi St - Al 'Iqabiyyah - Al Khalidiyya - Abu Dhabi",
    "lat": 24.175893917581035,
    "lon": 55.67675338404007
  },
  {
    "name": "Alia International Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "7 Al Rahma-a St - Al Sarouj - Al Harmoozi - Abu Dhabi",
    "lat": 24.205840673745165,
    "lon": 55.77535214539875
  },
  {
    "name": "American Community School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "opp. Baytooty Gourmet Bakery - Al Saadiyat Island - Saadiyat Promenade - Abu Dhabi",
    "lat": 24.604523509603375,
    "lon": 54.455474832429395
  },
  {
    "name": "American National School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "129th St - Al Khibeesi - Shabhanat Al Khabisi - Abu Dhabi",
    "lat": 24.230323000648184,
    "lon": 55.70232788278337
  },
  {
    "name": "Amity International School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "E10, Exit 39,Al Bahya - Abu Dhabi",
    "lat": 24.5374216160642,
    "lon": 54.632125039873785
  },
  {
    "name": "Arzana Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Bani Yas - Baniyas East - Abu Dhabi",
    "lat": 24.293697660120987,
    "lon": 54.63787035336348
  },
  {
    "name": "Ashabal Al Quds Secondary Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Shakhbout City - MSH11 - Abu Dhabi",
    "lat": 24.360368029756028,
    "lon": 54.62888229385125
  },
  {
    "name": "Aspen Heights British School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Street 15 - Al Bahyah - Al Bahyah Old - Abu Dhabi",
    "lat": 24.54569919738861,
    "lon": 54.666378822690405
  },
  {
    "name": "Australian School Of Abu Dhabi",
    "school_type": "Private",
    "curriculum_type": "International Baccalaureate",
    "address": "Street 15, Opposite The Civil Defence Building, Khalifa City B - Abu Dhabi",
    "lat": 24.35410725057391,
    "lon": 54.636633455209186
  },
  {
    "name": "Bait Al Maqdes International Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "musaffah area - ME11 - Abu Dhabi",
    "lat": 24.32703710267186,
    "lon": 54.532752138611215
  },
  {
    "name": "Baniyas International Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "19th St - Bani Yas - EB1 01 - Abu Dhabi",
    "lat": 24.324244500793245,
    "lon": 54.63406850734579
  },
  {
    "name": "Baraem Al Ain Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Al Muwaij'i - Al Ruwaikah - Abu Dhabi",
    "lat": 24.21869866130375,
    "lon": 55.774990128842965
  },
  {
    "name": "Bateen World Academy",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "35 Al Najah Street - Al Manhal - W18 01 - Abu Dhabi",
    "lat": 24.458033664369797,
    "lon": 54.36155178832081
  },
  {
    "name": "Beaconhouse Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.198671367109707,
    "lon": 55.720187934333566
  },
  {
    "name": "Belvedere British School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Mohamed Bin Zayed City - ME9 - Abu Dhabi",
    "lat": 24.34312130279963,
    "lon": 54.535142090162566
  },
  {
    "name": "Belvedere International School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Hili - Ugdat Al Husoon - Abu Dhabi",
    "lat": 24.31412710483791,
    "lon": 55.787382334336186
  },
  {
    "name": "Bhavans Pearl Wisdom School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "العينPlot No. 12 Sector 16 - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.18606845501931,
    "lon": 55.711742430645145
  },
  {
    "name": "Bright Riders School",
    "school_type": "Private",
    "curriculum_type": "CBSE",
    "address": "8GVR+QF4 - Mohamed Bin Zayed City - Z17 01 - Abu Dhabi",
    "lat": 24.343850051929117,
    "lon": 54.5417320361811
  },
  {
    "name": "British Oak Montessori Kg",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Al Waha Building Al Ghadeer Community - Abu Dhabi",
    "lat": 24.842502122172057,
    "lon": 55.02873966502731
  },
  {
    "name": "Canadian International School",
    "school_type": "Private",
    "curriculum_type": "Canadian",
    "address": "A - Khalifa City - SE43 - Abu Dhabi",
    "lat": 24.4586107586948,
    "lon": 54.65464147663738
  },
  {
    "name": "Creative British School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "10th St - Mohamed Bin Zayed City - Mussafah 10 - Abu Dhabi",
    "lat": 24.33287679365761,
    "lon": 54.53795036685986
  },
  {
    "name": "Crescent International Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "شارع - ٢٠ - Khalifa City - SE44 - Abu Dhabi",
    "lat": 24.431447659130573,
    "lon": 54.58347573802724
  },
  {
    "name": "Darul Huda Islamic School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "Al Muwaij'i - Al Ruwaikah - Al Ain",
    "lat": 24.202315038010912,
    "lon": 55.720475747829106
  },
  {
    "name": "Diyafah International School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "8HW6+WFJ - Mohamed Bin Zayed City - Z13 - Abu Dhabi",
    "lat": 24.345034149084473,
    "lon": 54.55747243249275
  },
  {
    "name": "Dunes International School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "39 Al Hajous St - Mohamed Bin Zayed City - ME9 - Abu Dhabi",
    "lat": 24.33995630658684,
    "lon": 54.53286621899728
  },
  {
    "name": "Elite Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "1 Al Jazwah St - Mohamed Bin Zayed City - ME9 - Abu Dhabi",
    "lat": 24.34689362140343,
    "lon": 54.53763058035552
  },
  {
    "name": "Emirates Education Academy",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "شارع دمشق - Madinat Za'id - MZW3 - Abu Dhabi",
    "lat": 23.659833994877587,
    "lon": 53.69848159014736
  },
  {
    "name": "Emirates Falcon International Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Al Jabr St - Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.190297573405335,
    "lon": 55.70438242326854
  },
  {
    "name": "Emirates Future International Academy",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "10th Street - Mohamed Bin Zayed City - ME10 - Abu Dhabi",
    "lat": 24.335941444361676,
    "lon": 54.5326670901622
  },
  {
    "name": "Excel International School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "16th St - Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.185169356744147,
    "lon": 55.71261657481957
  },
  {
    "name": "Excellence Global School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Al Dhannah City - Abu Dhabi",
    "lat": 24.08750240835594,
    "lon": 52.65013933617538
  },
  {
    "name": "Future International Academy",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "2 شارع الهُدْهُد - Al Sarouj - Al Mashall - Abu Dhabi",
    "lat": 24.242148023287093,
    "lon": 55.85133980933445
  },
  {
    "name": "Garden City British School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.199104499638654,
    "lon": 55.72212939569184
  },
  {
    "name": "Gems American Academy",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "16th Street, Madinat Khalifa A - Abu Dhabi",
    "lat": 24.429111028231233,
    "lon": 54.56507725152249
  },
  {
    "name": "Gems Cambridge International School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Mall - 6th St, Baniyas East, Near - Bawabat Al Sharq - Abu Dhabi",
    "lat": 24.319875419310286,
    "lon": 54.6838294416029
  },
  {
    "name": "Gems Founders School Ad Limited",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Masdar City - SE45 01 - Abu Dhabi",
    "lat": 24.445482327461644,
    "lon": 54.65773452281374
  },
  {
    "name": "Gems United Indian School",
    "school_type": "Private",
    "curriculum_type": "CBSE",
    "address": "42 nd, Baniyas West, Abu Dhabi",
    "lat": 24.295311795731006,
    "lon": 54.618972774235665
  },
  {
    "name": "Gems Winchester School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Al Falah St, Behind Medeor 24x7 Hospital - Abu Dhabi",
    "lat": 24.51197952963659,
    "lon": 54.406208595397565
  },
  {
    "name": "Gems World Academy",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "FCH6+QMH - Al Reem Island - RR7 - Abu Dhabi",
    "lat": 24.545876751564386,
    "lon": 54.79806694705141
  },
  {
    "name": "German International School",
    "school_type": "Private",
    "curriculum_type": "German",
    "address": "23 - Street - 34 As Sulouf St - المَنهَلغرب 13-02 - Abu Dhabi",
    "lat": 24.59937749190245,
    "lon": 54.254205267596205
  },
  {
    "name": "Global English School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "global english school - Al Muwaij'i - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.193190976105875,
    "lon": 55.704157818993956
  },
  {
    "name": "Global Indian International School",
    "school_type": "Private",
    "curriculum_type": "CBSE",
    "address": "Bani Yas - Baniyas East - Abu Dhabi",
    "lat": 24.298378382191835,
    "lon": 54.636391463170746
  },
  {
    "name": "Good Will Children Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "At Taʹallum St - opposite Al Surour Park - Mussafah - ME10 - Abu Dhabi",
    "lat": 24.330829272753004,
    "lon": 54.53859413375034
  },
  {
    "name": "Grace Valley Indian School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "16th St - Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.186829983431263,
    "lon": 55.71180127850794
  },
  {
    "name": "Ibn Khaldoun Private Science School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "6QH7+4M3 - Central District - Hai Al Humaira - Abu Dhabi",
    "lat": 24.227876892850897,
    "lon": 55.76440171836245
  },
  {
    "name": "Indian School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "Al Muwaij'i - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.201774417972686,
    "lon": 55.693231769031684
  },
  {
    "name": "International Academic School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "شارع 8 - Shakhbout City - MSH14 - Abu Dhabi",
    "lat": 24.41231077414016,
    "lon": 54.66440668312969
  },
  {
    "name": "International Indian School",
    "school_type": "Private",
    "curriculum_type": "CBSE",
    "address": "42 Street - Bani Yas - Baniyas West - Abu Dhabi",
    "lat": 24.329400930002336,
    "lon": 54.46115002469226
  },
  {
    "name": "International Jubilee Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Madinat Zayed - Zone 1 - Abu Dhabi",
    "lat": 24.4837338600918,
    "lon": 54.38204980977973
  },
  {
    "name": "Islamiya English School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Khalifa Bin Zayed The First St - Al Danah - Zone 1 - Abu Dhabi",
    "lat": 24.476054613224807,
    "lon": 54.37617295454026
  },
  {
    "name": "Italian International School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Khalifa City - SE44 - Abu Dhabi",
    "lat": 24.430902301058314,
    "lon": 54.58229872822005
  },
  {
    "name": "Japanese School",
    "school_type": "Private",
    "curriculum_type": "Japanese",
    "address": "F84V+P5H - King Abdullah Bin Abdulaziz Al Saud St - Al Bateen - W16 - Abu Dhabi",
    "lat": 24.459272952313366,
    "lon": 54.34598196957364
  },
  {
    "name": "Jebal Hafeet School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "14th St - Mbazzarah Al Khadra - Green Mubazzarah 2 - Abu Dhabi",
    "lat": 24.084585906091675,
    "lon": 55.737454670542675
  },
  {
    "name": "Jern Yafoor",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "Al Ain Rd - Bani Yas - Baniyas West - Abu Dhabi",
    "lat": 24.299562641956896,
    "lon": 54.62075615638059
  },
  {
    "name": "Knowledge International School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "5PV4+JG - Al Muwaij'i - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.194597528840212,
    "lon": 55.70676063802182
  },
  {
    "name": "Liwa International School For Girls",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Al Manaseer - Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.195865863176046,
    "lon": 55.71245483185997
  },
  {
    "name": "Madar International School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Maadhi Mosque - beside Alin co operative - Al Towayya - District - Abu Dhabi",
    "lat": 24.242860328651034,
    "lon": 55.68672514967411
  },
  {
    "name": "Mamoura British Academy",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "F98V+C8J Mohammed Bin Khalifa St - Badʹ Sultan St - Abu Dhabi",
    "lat": 24.46630435260181,
    "lon": 54.39383719569787
  },
  {
    "name": "Manor Hall International School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.19960625255849,
    "lon": 55.722590403654635
  },
  {
    "name": "Maplewood Canadian International School",
    "school_type": "Private",
    "curriculum_type": "Canadian",
    "address": "Musaffah - Mohamed Bin Zayed City - ME9 - Abu Dhabi",
    "lat": 24.34277212924337,
    "lon": 54.53340070181381
  },
  {
    "name": "Maryam Bint Omran School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "7JPX+8J6 - Bani Yas - EB9 - Abu Dhabi",
    "lat": 24.28606402157267,
    "lon": 54.64947206501461
  },
  {
    "name": "Mayoor Private School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "42th St,Al Wathba South - Abu Dhabi",
    "lat": 24.27059681782116,
    "lon": 54.65113182083996
  },
  {
    "name": "Merryland International School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Plot -13, Musaffah, Sector 9 - Abu Dhabi",
    "lat": 24.346690922907484,
    "lon": 54.535896590162515
  },
  {
    "name": "Model Private School",
    "school_type": "Private",
    "curriculum_type": "CBSE",
    "address": "POST BOX NO : 25723 - 12 As Sadeem St - Mohamed Bin Zayed City - Abu Dhabi",
    "lat": 24.32143914128976,
    "lon": 54.53776162268518
  },
  {
    "name": "Mohammed Bin Khalid Al Nahyan Generations School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.225640014463643,
    "lon": 55.734695877652186
  },
  {
    "name": "Mubarak Bin Mohammed School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "Women's Association - Al KhalidiyahW17-01 - Al Khalidiyah - الخَالِديةغرب 17-01 - Abu Dhabi",
    "lat": 24.458255363572235,
    "lon": 54.35502499084142
  },
  {
    "name": "Muna British Academy",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "GCMP+4R7 St - Al Saadiyat Island - SDE2 - Abu Dhabi",
    "lat": 24.533056484802177,
    "lon": 54.436568969881165
  },
  {
    "name": "New Indian Model School",
    "school_type": "Private",
    "curriculum_type": "Kerala",
    "address": "68PW+XRP - Rebat St - next to National Charity School - Al Garhoud - Dubai",
    "lat": 25.237716205731314,
    "lon": 55.34782056872491
  },
  {
    "name": "Nord Anglia International School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Al Reem Island - Tamouh - Abu Dhabi",
    "lat": 24.50375796740083,
    "lon": 54.52453316554098
  },
  {
    "name": "Noya British School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Yas Island - Yas North - Abu Dhabi",
    "lat": 24.501067184204338,
    "lon": 54.62607765521246
  },
  {
    "name": "Oasis International School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "62nd St - Al Jimi - Al Ameriya - Abu Dhabi",
    "lat": 24.254189178626753,
    "lon": 55.72708792637195
  },
  {
    "name": "Our Own English High School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Falaj Hazza' - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.262159862859328,
    "lon": 55.90123828479452
  },
  {
    "name": "Pakistan Community Welfare School",
    "school_type": "Private",
    "curriculum_type": "Pakistan",
    "address": "10808 - Abu Dhabi",
    "lat": 24.321143065131885,
    "lon": 54.53245825152025
  },
  {
    "name": "Pakistani Islamic Private School",
    "school_type": "Private",
    "curriculum_type": "Pakistan",
    "address": "5PW4+5W3 - Al Muwaij'i - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.195833149284468,
    "lon": 55.707649218994014
  },
  {
    "name": "Pearl British Academy",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Muroor Rd - Al Danah - Zone 1 - Abu Dhabi",
    "lat": 24.475359225603462,
    "lon": 54.37653464540481
  },
  {
    "name": "Philippine Emirates Private School",
    "school_type": "Private",
    "curriculum_type": "Philippine",
    "address": "Khalifa City - Sector 32 - Abu Dhabi",
    "lat": 24.418241677422156,
    "lon": 54.565445018999085
  },
  {
    "name": "Pinnacle American School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Madinat Zayed - MZW12 - Abu Dhabi",
    "lat": 23.644593516714043,
    "lon": 53.70592686500053
  },
  {
    "name": "Premium International Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Ramlat Bu Fraydah St - Shiab Al Ashkhar - Hai Zayed Mosque - Abu Dhabi",
    "lat": 24.154006326963223,
    "lon": 55.72242375704865
  },
  {
    "name": "Private International English School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "Mussafah, Sector 9, Shabiya - Abu Dhabi",
    "lat": 24.33988558474351,
    "lon": 54.531748924529914
  },
  {
    "name": "Raha International School",
    "school_type": "Private",
    "curriculum_type": "International Baccalaureate",
    "address": "Khalifa City 'A, Al Raha Gardens Cnr. Al Mireef St - الوسيط - & - Abu Dhabi",
    "lat": 24.434388636459058,
    "lon": 54.57797230199262
  },
  {
    "name": "Raha International School Khalifa- A",
    "school_type": "Private",
    "curriculum_type": "International Baccalaureate",
    "address": "11 Al Mutafani St - Khalifa City - Sector 13 - Abu Dhabi",
    "lat": 24.409732013131613,
    "lon": 54.590546496471084
  },
  {
    "name": "Rawafed Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "شارع - ٢٠ - Khalifa City - SE44 - Abu Dhabi",
    "lat": 24.429315686119047,
    "lon": 54.5855041895783
  },
  {
    "name": "Reach British School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Baniyas East - Abu Dhabi",
    "lat": 24.327496725771482,
    "lon": 54.62912769200638
  },
  {
    "name": "Repton Foundation School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Al Reem Island - RS1 - Abu Dhabi",
    "lat": 24.507546834379763,
    "lon": 54.406623500559505
  },
  {
    "name": "Repton School Abu Dhabi",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Unnamed Road - Al Reem Island - Tamouh - Abu Dhabi",
    "lat": 24.493683319433146,
    "lon": 54.40703114386797
  },
  {
    "name": "Rosary Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "Al Nahyan - Zone 1 - Abu Dhabi",
    "lat": 24.489022578573753,
    "lon": 54.41021596848119
  },
  {
    "name": "Rowad Al Dhafra Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "MP46+2PW - Madinat Zayed - MZE1 05 - Abu Dhabi",
    "lat": 23.655352835381027,
    "lon": 53.712243391991464
  },
  {
    "name": "Royal American School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "8G9J+4WF - 29 Jazeerat Nashaylah St - near SHABIYA BUS STATION - Mohamed Bin Zayed City - ME12 - Abu Dhabi",
    "lat": 24.31666206462949,
    "lon": 54.53260766132696
  },
  {
    "name": "Ryan International School",
    "school_type": "Private",
    "curriculum_type": "CBSE",
    "address": "Khalifa City - SE45 04 - Abu Dhabi",
    "lat": 24.44009513032142,
    "lon": 54.74780159245734
  },
  {
    "name": "Saint Joseph Private School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "19 Al Soula'i St - Al Mushrif - W24 02 - Abu Dhabi",
    "lat": 24.448587114146473,
    "lon": 54.385533103660215
  },
  {
    "name": "Seer Bani Yas School",
    "school_type": "Charter",
    "curriculum_type": "American",
    "address": "Seer Bani Yas Secondary School - 17 Waqid Bin Abdullah St - Mohamed Bin Zayed City - ME10 - Abu Dhabi",
    "lat": 24.3302246938344,
    "lon": 54.532251018410804
  },
  {
    "name": "Shaikh Khalifa Bin Zayed Bangladesh Islamia Private School",
    "school_type": "Private",
    "curriculum_type": "Bangladeshi",
    "address": "218 31st St - near Abu Dhabi Co-op Society - Al Muntazah - Zone 1 - Abu Dhabi",
    "lat": 24.4360728340298,
    "lon": 54.439731190164686
  },
  {
    "name": "Sharjah American International School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Sharjah American International School - Abu Dhabi",
    "lat": 24.379246567261706,
    "lon": 54.700367685282
  },
  {
    "name": "Sheikh Khalifa Bin Zayed Arab Pakistani School",
    "school_type": "Private",
    "curriculum_type": "Pakistan",
    "address": "CCV2+PFJ - Sultan Bin Zayed The First St - Hadbat Al Za`Faranah - E30 - Abu Dhabi",
    "lat": 24.44454238804299,
    "lon": 54.40016864347471
  },
  {
    "name": "Shining Star International School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "Musaffah - ME12 - Abu Dhabi",
    "lat": 24.321104851734543,
    "lon": 54.53330499871114
  },
  {
    "name": "Summit International School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Near Abu Dhabi Post office - Old Pasport Rd - Abu Dhabi",
    "lat": 24.479153829307815,
    "lon": 54.36826644967945
  },
  {
    "name": "Sunrise English Private School",
    "school_type": "Private",
    "curriculum_type": "Indian",
    "address": "22 Al Jidayil St - near Safeer Mall - Shabiya - ME-09 - Abu Dhabi",
    "lat": 24.338671135371403,
    "lon": 54.53069293433686
  },
  {
    "name": "Sunrise International School",
    "school_type": "Private",
    "curriculum_type": "CBSE",
    "address": "F98C+6FV - Al Manhal - W14 02 - Abu Dhabi",
    "lat": 24.4652282679375,
    "lon": 54.371836092009396
  },
  {
    "name": "Tawam Private Model School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "5PW9+W9X - Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.19753512966785,
    "lon": 55.718809332489364
  },
  {
    "name": "The American International School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "مصنع بيبسي كولا - أبوظبي - شارع 29 ، طريق المطار ، مقابل - Abu Dhabi",
    "lat": 24.4928777089953,
    "lon": 54.384133395559225
  },
  {
    "name": "The British International School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "behind Abu Dhabi University - Zayed City - MZ39 - Abu Dhabi",
    "lat": 24.449990106443693,
    "lon": 54.69998071282137
  },
  {
    "name": "The British School Al Khubairat",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Al Mushrif - W24 02 - Abu Dhabi",
    "lat": 24.447678216038398,
    "lon": 54.38612361405367
  },
  {
    "name": "The Cambridge High School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Shabia 9, Mohammed Bin Zayed City,Near Safeer Mall, Mussafah - near Safeer Mall - Mohamed Bin Zayed City - ME9 - Abu Dhabi",
    "lat": 24.346680641437388,
    "lon": 54.53105296501605
  },
  {
    "name": "The Gulf International Private Academy",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "5PV3+4RF The Gulf International Private Academy - Khalid Bin Sultan St - Al Muwaij'i - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.193755794333896,
    "lon": 55.70472878831493
  },
  {
    "name": "The Philippine Global School",
    "school_type": "Private",
    "curriculum_type": "Philippine",
    "address": "CCV2+7X8 - Hadbat Al Za`Faranah - E30 - Abu Dhabi",
    "lat": 24.443396858840334,
    "lon": 54.402924593853086
  },
  {
    "name": "The Philippine School",
    "school_type": "Private",
    "curriculum_type": "Philippine",
    "address": "CCV2+7X8 - Hadbat Al Za`Faranah - E30 - Abu Dhabi",
    "lat": 24.443211281604828,
    "lon": 54.4028173055043
  },
  {
    "name": "The Russian School Of Abu Dhabi",
    "school_type": "Private",
    "curriculum_type": "Russian",
    "address": "6 Al Quoz St - Al Bateen - W39 - Abu Dhabi",
    "lat": 24.46021325810762,
    "lon": 54.338439657055815
  },
  {
    "name": "The Sheikh Zayed Private Academy For Boys",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "Al Khalidiyah - W9 - Abu Dhabi",
    "lat": 24.464884741761004,
    "lon": 54.34985115638433
  },
  {
    "name": "The Sheikh Zayed Private Academy For Girls",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "F93C+8J6 - Mubarak Bin Mohammed St - Al Rowdah - W15 01 - Abu Dhabi",
    "lat": 24.453584737779078,
    "lon": 54.37215326870685
  },
  {
    "name": "The Spanish School Of Abu Dhabi",
    "school_type": "Private",
    "curriculum_type": "Spanish",
    "address": "King Abdullah Bin Abdul Aziz Al Saud Street - 6 Al Faye St - Al Bateen - Abu Dhabi",
    "lat": 24.45486970396775,
    "lon": 54.35012944385347
  },
  {
    "name": "Universal Philippine School",
    "school_type": "Private",
    "curriculum_type": "Philippine",
    "address": "17 Al Ikhtira' St - Al Muwaij'i - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.194170807215055,
    "lon": 55.70557469384763
  },
  {
    "name": "Universal Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Al Muwaij'i - Ugdat Al Mutawaa - Abu Dhabi",
    "lat": 24.198577022824097,
    "lon": 55.71288428093843
  },
  {
    "name": "Virginia International Private School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "2 Al Dalj St - Shakhbout City - MSH28 - Abu Dhabi",
    "lat": 24.391104258097506,
    "lon": 54.654579138026286
  },
  {
    "name": "Vision Private School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "37 Al Tarfa St - Al Mushrif - W47 - Abu Dhabi",
    "lat": 24.431267414164992,
    "lon": 54.40496057851339
  },
  {
    "name": "Wales International School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Al Shamkhah - SH22 - Abu Dhabi",
    "lat": 24.356432487496186,
    "lon": 54.70439282880476
  },
  {
    "name": "Yas Academy School",
    "school_type": "Private",
    "curriculum_type": "MoE (UAE)",
    "address": "F9JJ+42W - Al Danah - Zone 1 - Abu Dhabi",
    "lat": 24.480584058027972,
    "lon": 54.38069673987269
  },
  {
    "name": "Yas American Academy",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "FHVQ+PF9 - Al Tahaddur St - Yas Island - YS3 05 - Abu Dhabi",
    "lat": 24.494691069581037,
    "lon": 54.58892129201017
  },
  {
    "name": "Yasmina American School",
    "school_type": "Private",
    "curriculum_type": "American",
    "address": "CGGW+6M7 - Khalifa City - SW18 - Abu Dhabi",
    "lat": 24.425728544264327,
    "lon": 54.54733122637589
  },
  {
    "name": "Zakher Private School",
    "school_type": "Private",
    "curriculum_type": "British",
    "address": "Falaj Hazza' - Magr Al Dhabi - Abu Dhabi",
    "lat": 24.193153343539837,
    "lon": 55.71219879782897
  }
];