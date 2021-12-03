
// ====== feather icons
feather.replace({ width: '1em', height: '1em' })
// end

// ====== scrollTo
$(document).ready(function () {

  function scrollToElement(element) {
    $(element).get(0).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

  $("#to_section_1").on("click", function () {
    var elemq = $("#section_1");
    scrollToElement(elemq);
  });

  $("#to_section_2").on("click", function () {
    var elemq = $("#section_2");
    scrollToElement(elemq);
  });

  $("#to_section_3").on("click", function () {
    var elemq = $("#section_3");
    scrollToElement(elemq);
  });

  $("#to_section_4").on("click", function () {
    var elemq = $("#section_4");
    scrollToElement(elemq);
  });


});
// end

// ====== 浮動 button 滑到某高度出現 滑到某高度消失
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".fixed-btn").addClass('show');
    }
    else {
      $(".fixed-btn").removeClass('show');
    }
  });
});
// end

const App = {
  data() {
    return {

      isOpenCat_Info: false,
      isOpenCan_Info: false,
      isOpenAllWetFood: false,
      isOpenfeed_Info: false,
      isOpenHalfWetFood: false,
      isOpenAllMath: false,

      // 勾選貓咪目前狀態
      cat_kitten_Status: ["10週大", "20週大", "30週大", "40週大"],
      cat_normal_Status: ["活動力低(未結紮)", "活動力低(已結紮)", "活動力高(未結紮)", "活動力高(已結紮)"],
      cat_mother_Status: ["懷孕期", "哺乳期"],

      // 貓咪個資
      cat_Info: {
        weight: '',
        status: '',
        kg_kcal: 0,

        daliyKcal: 0,
        daliyProtein: {
          min: 0,
          max: 0
        },
        daliyFat: {
          min: 0,
          max: 0
        },
        daliyWater: {
          min: 0,
          max: 0,
          over: 0,
        },
      },

      // 罐頭 - 營養 %
      can_Nutrition: {
        canWeight: '',
        Protein_p: '',
        Fat_p: '',
        Fiber_p: '',
        Water_p: '',
        Ash_p: '',
        Carbohydrate_p: 0,
      },

      // 罐頭 - 營養 g
      can_Info: {
        Kcal: 0,
        Protein_g: 0,
        Fat_g: 0,
        Water_g: 0,
        Carbohydrate_g: 0,
      },

      // 罐頭 - 乾物比
      can_dmd: {
        colors: ['red', 'blue', 'green'],

        dmb_protein: 0,
        dmb_protein_result: '',
        protein_colorClass: [],

        dmb_fat: 0,
        dmb_fat_result: '',
        fat_colorClass: [],

        dmb_carbohydrate: 0,
        dmb_carbohydrate_result: '',
        carbohydrate_colorClass: [],

        dmb_fiber: 0,
        dmb_fiber_result: '',
        fiber_colorClass: [],
      },

      // 全濕食配方
      allWetFood_Info: {
        items: 0,
        Protein: {
          number: 0,
          result: '',
          colorClass: [],
          isOver: false,
          isLess: false,
        },
        Fat: {
          number: 0,
          result: '',
          colorClass: [],
          isOver: false,
          isLess: false,
        },
        Water: {
          number: 0,
          result: '',
          colorClass: [],
          isOver: false,
          isLess: false,
        },
      },

      // 飼料 - 營養 %
      feed_Nutrition: {
        feed_1KG_Kcal: '',
        Protein_p: '',
        Fat_p: '',
        Fiber_p: '',
        Water_p: '',
        Ash_p: '',
        Carbohydrate_p: 0,
      },

      // 飼料 - 營養 g
      feed_Info: {
        Kcal: 0,
        Protein_g: 0,
        Fat_g: 0,
        Water_g: 0,
        Carbohydrate_g: 0,
      },

      // 飼料 - 乾物比
      feed_dmd: {
        colors: ['red', 'blue', 'green'],

        dmb_protein: 0,
        dmb_protein_result: '',
        protein_colorClass: [],

        dmb_fat: 0,
        dmb_fat_result: '',
        fat_colorClass: [],

        dmb_carbohydrate: 0,
        dmb_carbohydrate_result: '',
        carbohydrate_colorClass: [],

        dmb_fiber: 0,
        dmb_fiber_result: '',
        fiber_colorClass: [],
      },

      // 半濕食配方
      halfWetFood_Info: {
        // 罐頭每日幾罐的選項
        canDaliy_choose: [],
        // 選擇幾個罐頭
        canDaliyNumber: '',

        // 飼料 g 克數
        feed_g: 0,

        // 飼料 + 罐頭 蛋白質
        Protein: {
          can_Protein_g: 0,
          number: 0,
          result: '',
          colorClass: [],
          isOver: false,
          isLess: false,
        },
        // 飼料 + 罐頭 脂肪
        Fat: {
          can_Fat_g: 0,
          number: 0,
          result: '',
          colorClass: [],
          isOver: false,
          isLess: false,
        },
        // 飼料 + 罐頭 水分
        Water: {
          can_Water_g: 0,
          number: 0,
          result: '',
          colorClass: [],
          isOver: false,
          isLess: false,
        },
      },

    }
  },

  computed: {
    isDataChanged() {
      return [this.cat_Info.weight, this.cat_Info.status, this.can_Nutrition.canWeight, this.can_Nutrition.Protein_p, this.can_Nutrition.Fat_p, this.can_Nutrition.Fiber_p, this.can_Nutrition.Water_p, this.can_Nutrition.Ash_p, this.feed_Nutrition.feed_1KG_Kcal, this.feed_Nutrition.Protein_p, this.feed_Nutrition.Fat_p, this.feed_Nutrition.Fiber_p, this.feed_Nutrition.Water_p, this.feed_Nutrition.Ash_p].join()
    }
  },

  watch: {
    isDataChanged: function () {
      this.closeAllMath();
    }
  },

  methods: {

    reset() {
      window.location.reload();
    },

    closeAllMath() {
      this.isOpenAllMath = false;
    },

    // 計算所有
    mathAll() {
      if (this.cat_Info.weight !== '' && this.cat_Info.status !== '' && this.can_Nutrition.canWeight !== '' && this.can_Nutrition.Protein_p !== '' && this.can_Nutrition.Fat_p !== '' && this.can_Nutrition.Fiber_p !== '' && this.can_Nutrition.Water_p !== '' && this.can_Nutrition.Ash_p !== '' && this.feed_Nutrition.feedWeight !== '' && this.feed_Nutrition.Protein_p !== '' && this.feed_Nutrition.Fat_p !== '' && this.feed_Nutrition.Fiber_p !== '' && this.feed_Nutrition.Water_p !== '' && this.feed_Nutrition.Ash_p !== '') {
        this.isOpenAllMath = true;
        this.cat_daliy_info();
        this.math_can();
        this.math_feed();
      } else {
        alert('請確認已填寫所有內容')
      }
    },

    // 貓咪每日營養
    cat_daliy_info() {

      // 開啟貓咪的每日計算結果
      this.isOpenCat_Info = true;

      switch (this.cat_Info.status) {
        case '10週大':
          this.cat_Info.kg_kcal = 248;
          break;
        case '20週大':
          this.cat_Info.kg_kcal = 130;
          break;
        case '30週大':
          this.cat_Info.kg_kcal = 99;
          break;
        case '40週大':
          this.cat_Info.kg_kcal = 80;
          break;
        case '活動力低(未結紮)':
          this.cat_Info.kg_kcal = 40;
          break;
        case '活動力低(已結紮)':
          this.cat_Info.kg_kcal = 40 * 0.7;
          break;
        case '活動力高(未結紮)':
          this.cat_Info.kg_kcal = 55;
          break;
        case '活動力高(已結紮)':
          this.cat_Info.kg_kcal = 55 * 0.7;
          break;
        case '懷孕期':
          this.cat_Info.kg_kcal = 99;
          break;
        case '哺乳期':
          this.cat_Info.kg_kcal = 221;
          break;
      }

      // 每日熱量
      this.cat_Info.daliyKcal = (this.cat_Info.weight * this.cat_Info.kg_kcal).toFixed(0);
      // 每日蛋白質克數
      this.cat_Info.daliyProtein.min = ((this.cat_Info.daliyKcal * 0.46) / 3.5).toFixed(0);
      this.cat_Info.daliyProtein.max = ((this.cat_Info.daliyKcal * 0.6) / 3.5).toFixed(0);
      // 每日脂肪克數
      this.cat_Info.daliyFat.min = ((this.cat_Info.daliyKcal * 0.09) / 8.5).toFixed(0);
      this.cat_Info.daliyFat.max = ((this.cat_Info.daliyKcal * 0.5) / 8.5).toFixed(0);
      // 每日飲水量
      this.cat_Info.daliyWater.min = (this.cat_Info.weight * 40).toFixed(0);
      this.cat_Info.daliyWater.max = (this.cat_Info.weight * 60).toFixed(0);
      this.cat_Info.daliyWater.over = (this.cat_Info.daliyWater.min * 2).toFixed(0)
    },

    // 計算 罐頭 單位重量和乾物比
    math_can() {

      // 開啟罐頭的計算結果
      this.isOpenCan_Info = true;

      // 計算碳水化合物
      this.can_Nutrition.Carbohydrate_p = (100 - this.can_Nutrition.Protein_p - this.can_Nutrition.Fat_p - this.can_Nutrition.Fiber_p - this.can_Nutrition.Water_p - this.can_Nutrition.Ash_p).toFixed(1);

      // 蛋白質乾物比 = 蛋白質% / (100 - 水分%) * 100
      this.can_dmd.dmb_protein = (this.can_Nutrition.Protein_p / (100 - this.can_Nutrition.Water_p) * 100).toFixed(1);

      // 脂肪乾物比 = 脂肪% / (100 - 水分%) * 100
      this.can_dmd.dmb_fat = (this.can_Nutrition.Fat_p / (100 - this.can_Nutrition.Water_p) * 100).toFixed(1);

      // 碳水化合物乾物比 = 碳水化合物% / (100 - 水分%) * 100
      this.can_dmd.dmb_carbohydrate = (this.can_Nutrition.Carbohydrate_p / (100 - this.can_Nutrition.Water_p) * 100).toFixed(1);

      // 纖維乾物比 = 纖維% / (100 - 水分%) * 100
      this.can_dmd.dmb_fiber = (this.can_Nutrition.Fiber_p / (100 - this.can_Nutrition.Water_p) * 100).toFixed(1);

      // 執行罐頭的乾物比結果
      this.can_dmb_result();

      // 計算一罐中含有的蛋白質(g)
      this.can_Info.Protein_g = (this.can_Nutrition.canWeight * this.can_Nutrition.Protein_p / 100).toFixed(1);

      // 計算一罐中含有的脂肪(g)
      this.can_Info.Fat_g = (this.can_Nutrition.canWeight * this.can_Nutrition.Fat_p / 100).toFixed(1);

      // 計算一罐中含有的水分(ml)
      this.can_Info.Water_g = (this.can_Nutrition.canWeight * this.can_Nutrition.Water_p / 100).toFixed(1);

      // 計算一罐中含有的碳水化合物(g)
      this.can_Info.Carbohydrate_g = (this.can_Nutrition.canWeight * this.can_Nutrition.Carbohydrate_p / 100).toFixed(1);

      // 計算一罐中含有的熱量
      this.can_Info.Kcal = ((this.can_Info.Protein_g * 3.5) + (this.can_Info.Fat_g * 8.5) + (this.can_Info.Carbohydrate_g * 3.5)).toFixed(1);

      // 執行計算全濕食配方的數據
      this.allWetFood_result();
      this.allWetFood_compare_cat_result();

      // 如果全濕食的每日罐頭數量不等於 0 ，就執行以下
      if (this.allWetFood_Info.items !== 0) {
        this.halfWetFood_Info.canDaliy_choose = [];
        this.halfWetFood_canDaliyNumber();
      }

    },

    // 判斷 罐頭 乾物比 結論
    can_dmb_result() {

      // 判斷蛋白質
      if (this.can_dmd.dmb_protein < 45) {
        this.can_dmd.dmb_protein_result = '過低';
        this.can_dmd.protein_colorClass = [];
        this.can_dmd.protein_colorClass.push(this.can_dmd.colors[1]);
      };
      if (45 <= this.can_dmd.dmb_protein && this.can_dmd.dmb_protein <= 65) {
        this.can_dmd.dmb_protein_result = '符合';
        this.can_dmd.protein_colorClass = [];
        this.can_dmd.protein_colorClass.push(this.can_dmd.colors[2]);
      };
      if (this.can_dmd.dmb_protein > 65) {
        this.can_dmd.dmb_protein_result = '過高';
        this.can_dmd.protein_colorClass = [];
        this.can_dmd.protein_colorClass.push(this.can_dmd.colors[0]);
      };

      // 判斷脂肪
      if (this.can_dmd.dmb_fat < 25) {
        this.can_dmd.dmb_fat_result = '過低';
        this.can_dmd.fat_colorClass = [];
        this.can_dmd.fat_colorClass.push(this.can_dmd.colors[1]);
      };
      if (25 <= this.can_dmd.dmb_fat && this.can_dmd.dmb_fat <= 45) {
        this.can_dmd.dmb_fat_result = '符合';
        this.can_dmd.fat_colorClass = [];
        this.can_dmd.fat_colorClass.push(this.can_dmd.colors[2]);
      };
      if (this.can_dmd.dmb_fat > 45) {
        this.can_dmd.dmb_fat_result = '過高';
        this.can_dmd.fat_colorClass = [];
        this.can_dmd.fat_colorClass.push(this.can_dmd.colors[0]);
      };

      // 判斷碳水化合物
      if (this.can_dmd.dmb_carbohydrate <= 0) {
        this.can_dmd.dmb_carbohydrate_result = '過低';
        this.can_dmd.carbohydrate_colorClass = [];
        this.can_dmd.carbohydrate_colorClass.push(this.can_dmd.colors[1]);
      };
      if (0 < this.can_dmd.dmb_carbohydrate && this.can_dmd.dmb_carbohydrate <= 10) {
        this.can_dmd.dmb_carbohydrate_result = '符合';
        this.can_dmd.carbohydrate_colorClass = [];
        this.can_dmd.carbohydrate_colorClass.push(this.can_dmd.colors[2]);
      };
      if (this.can_dmd.dmb_carbohydrate > 10) {
        this.can_dmd.dmb_carbohydrate_result = '過高';
        this.can_dmd.carbohydrate_colorClass = [];
        this.can_dmd.carbohydrate_colorClass.push(this.can_dmd.colors[0]);
      }

      // 判斷纖維
      if (this.can_dmd.dmb_fiber < 1) {
        this.can_dmd.dmb_fiber_result = '過低';
        this.can_dmd.fiber_colorClass = [];
        this.can_dmd.fiber_colorClass.push(this.can_dmd.colors[1]);
      };
      if (1 <= this.can_dmd.dmb_fiber && this.can_dmd.dmb_fiber <= 5) {
        this.can_dmd.dmb_fiber_result = '符合';
        this.can_dmd.fiber_colorClass = [];
        this.can_dmd.fiber_colorClass.push(this.can_dmd.colors[2]);
      };
      if (this.can_dmd.dmb_fiber > 5) {
        this.can_dmd.dmb_fiber_result = '過高';
        this.can_dmd.fiber_colorClass = [];
        this.can_dmd.fiber_colorClass.push(this.can_dmd.colors[0]);
      }

    },

    // 全濕食配方 - 每日需吃幾顆罐頭、各營養 g
    allWetFood_result() {
      this.allWetFood_Info.items = Number((this.cat_Info.daliyKcal / this.can_Info.Kcal).toFixed(1));

      this.allWetFood_Info.Protein.number = Number((this.allWetFood_Info.items * this.can_Info.Protein_g).toFixed(0));
      this.allWetFood_Info.Fat.number = Number((this.allWetFood_Info.items * this.can_Info.Fat_g).toFixed(0));
      this.allWetFood_Info.Water.number = Number((this.allWetFood_Info.items * this.can_Info.Water_g).toFixed(0));
    },

    // 判斷開啟 全濕食配方
    openAllWetFood_result() {
      if (this.isOpenCat_Info === false) {
        alert('請填寫第1、2步驟的所有欄位');
      } else if (this.isOpenCat_Info !== false && this.isOpenCan_Info !== false) {
        this.isOpenAllWetFood = !this.isOpenAllWetFood;
      }
    },

    // 判斷 全濕食與貓咪每日營養 結論
    allWetFood_compare_cat_result() {

      // 判斷蛋白質
      if (this.allWetFood_Info.Protein.number < this.cat_Info.daliyProtein.min) {
        this.allWetFood_Info.Protein.result = '不足';
        this.allWetFood_Info.Protein.isOver = false;
        this.allWetFood_Info.Protein.isLess = true;
        this.allWetFood_Info.Protein.colorClass = [];
        this.allWetFood_Info.Protein.colorClass.push(this.can_dmd.colors[1]);
      };
      if (this.cat_Info.daliyProtein.min <= this.allWetFood_Info.Protein.number && this.allWetFood_Info.Protein.number <= this.cat_Info.daliyProtein.max) {
        this.allWetFood_Info.Protein.result = '符合';
        this.allWetFood_Info.Protein.isLess = false;
        this.allWetFood_Info.Protein.isOver = false;
        this.allWetFood_Info.Protein.colorClass = [];
        this.allWetFood_Info.Protein.colorClass.push(this.can_dmd.colors[2]);
      };
      if (this.allWetFood_Info.Protein.number > this.cat_Info.daliyProtein.max) {
        this.allWetFood_Info.Protein.result = '過高';
        this.allWetFood_Info.Protein.isLess = false;
        this.allWetFood_Info.Protein.isOver = true;
        this.allWetFood_Info.Protein.colorClass = [];
        this.allWetFood_Info.Protein.colorClass.push(this.can_dmd.colors[0]);
      };

      // 判斷脂肪
      if (this.allWetFood_Info.Fat.number < this.cat_Info.daliyFat.min) {
        this.allWetFood_Info.Fat.result = '不足';
        this.allWetFood_Info.Fat.isOver = false;
        this.allWetFood_Info.Fat.isLess = true;
        this.allWetFood_Info.Fat.colorClass = [];
        this.allWetFood_Info.Fat.colorClass.push(this.can_dmd.colors[1]);
      };
      if (this.cat_Info.daliyFat.min <= this.allWetFood_Info.Fat.number && this.allWetFood_Info.Fat.number <= this.cat_Info.daliyFat.max) {
        this.allWetFood_Info.Fat.result = '符合';
        this.allWetFood_Info.Fat.isLess = false;
        this.allWetFood_Info.Fat.isOver = false;
        this.allWetFood_Info.Fat.colorClass = [];
        this.allWetFood_Info.Fat.colorClass.push(this.can_dmd.colors[2]);
      };
      if (this.allWetFood_Info.Fat.number > this.cat_Info.daliyFat.max) {
        this.allWetFood_Info.Fat.result = '過高';
        this.allWetFood_Info.Fat.isLess = false;
        this.allWetFood_Info.Fat.isOver = true;
        this.allWetFood_Info.Fat.colorClass = [];
        this.allWetFood_Info.Fat.colorClass.push(this.can_dmd.colors[0]);
      };

      // 判斷水分
      if (this.allWetFood_Info.Water.number < this.cat_Info.daliyWater.min) {
        this.allWetFood_Info.Water.result = '不足';
        this.allWetFood_Info.Water.isOver = false;
        this.allWetFood_Info.Water.isLess = true;
        this.allWetFood_Info.Water.colorClass = [];
        this.allWetFood_Info.Water.colorClass.push(this.can_dmd.colors[1]);
      };
      if (this.cat_Info.daliyWater.min <= this.allWetFood_Info.Water.number && this.allWetFood_Info.Water.number <= this.cat_Info.daliyWater.max) {
        this.allWetFood_Info.Water.result = '符合';
        this.allWetFood_Info.Water.isLess = false;
        this.allWetFood_Info.Water.isOver = false;
        this.allWetFood_Info.Water.colorClass = [];
        this.allWetFood_Info.Water.colorClass.push(this.can_dmd.colors[2]);
      };
      if (this.allWetFood_Info.Water.number > this.cat_Info.daliyWater.over) {
        this.allWetFood_Info.Water.result = '過高';
        this.allWetFood_Info.Water.isLess = false;
        this.allWetFood_Info.Water.isOver = true;
        this.allWetFood_Info.Water.colorClass = [];
        this.allWetFood_Info.Water.colorClass.push(this.can_dmd.colors[0]);
      };

    },

    // 計算 飼料 單位重量和乾物比
    math_feed() {

      // 開啟罐頭的計算結果
      this.isOpenfeed_Info = true;

      // 計算碳水化合物
      this.feed_Nutrition.Carbohydrate_p = (100 - this.feed_Nutrition.Protein_p - this.feed_Nutrition.Fat_p - this.feed_Nutrition.Fiber_p - this.feed_Nutrition.Water_p - this.feed_Nutrition.Ash_p).toFixed(1);

      // 蛋白質乾物比 = 蛋白質% / (100 - 水分%) * 100
      this.feed_dmd.dmb_protein = (this.feed_Nutrition.Protein_p / (100 - this.feed_Nutrition.Water_p) * 100).toFixed(1);

      // 脂肪乾物比 = 脂肪% / (100 - 水分%) * 100
      this.feed_dmd.dmb_fat = (this.feed_Nutrition.Fat_p / (100 - this.feed_Nutrition.Water_p) * 100).toFixed(1);

      // 碳水化合物乾物比 = 碳水化合物% / (100 - 水分%) * 100
      this.feed_dmd.dmb_carbohydrate = (this.feed_Nutrition.Carbohydrate_p / (100 - this.feed_Nutrition.Water_p) * 100).toFixed(1);

      // 纖維乾物比 = 纖維% / (100 - 水分%) * 100
      this.feed_dmd.dmb_fiber = (this.feed_Nutrition.Fiber_p / (100 - this.feed_Nutrition.Water_p) * 100).toFixed(1);

      // 執行罐頭的乾物比結果
      this.feed_dmb_result();

      // 計算一罐中含有的蛋白質(g)
      this.feed_Info.Protein_g = (this.feed_Nutrition.feedWeight * this.feed_Nutrition.Protein_p / 100).toFixed(1);

      // 計算一罐中含有的脂肪(g)
      this.feed_Info.Fat_g = (this.feed_Nutrition.feedWeight * this.feed_Nutrition.Fat_p / 100).toFixed(1);

      // 計算一罐中含有的水分(ml)
      this.feed_Info.Water_g = (this.feed_Nutrition.feedWeight * this.feed_Nutrition.Water_p / 100).toFixed(1);

      // 計算一罐中含有的碳水化合物(g)
      this.feed_Info.Carbohydrate_g = (this.feed_Nutrition.feedWeight * this.feed_Nutrition.Carbohydrate_p / 100).toFixed(1);

      // 計算一罐中含有的熱量
      this.feed_Info.Kcal = ((this.feed_Info.Protein_g * 3.5) + (this.feed_Info.Fat_g * 8.5) + (this.feed_Info.Carbohydrate_g * 3.5)).toFixed(1);


    },

    // 判斷 飼料 乾物比 結論
    feed_dmb_result() {

      // 判斷蛋白質
      if (this.feed_dmd.dmb_protein < 45) {
        this.feed_dmd.dmb_protein_result = '過低';
        this.feed_dmd.protein_colorClass = [];
        this.feed_dmd.protein_colorClass.push(this.feed_dmd.colors[1]);
      };
      if (45 <= this.feed_dmd.dmb_protein && this.feed_dmd.dmb_protein <= 65) {
        this.feed_dmd.dmb_protein_result = '符合';
        this.feed_dmd.protein_colorClass = [];
        this.feed_dmd.protein_colorClass.push(this.feed_dmd.colors[2]);
      };
      if (this.feed_dmd.dmb_protein > 65) {
        this.feed_dmd.dmb_protein_result = '過高';
        this.feed_dmd.protein_colorClass = [];
        this.feed_dmd.protein_colorClass.push(this.feed_dmd.colors[0]);
      };

      // 判斷脂肪
      if (this.feed_dmd.dmb_fat < 25) {
        this.feed_dmd.dmb_fat_result = '過低';
        this.feed_dmd.fat_colorClass = [];
        this.feed_dmd.fat_colorClass.push(this.feed_dmd.colors[1]);
      };
      if (25 <= this.feed_dmd.dmb_fat && this.feed_dmd.dmb_fat <= 45) {
        this.feed_dmd.dmb_fat_result = '符合';
        this.feed_dmd.fat_colorClass = [];
        this.feed_dmd.fat_colorClass.push(this.feed_dmd.colors[2]);
      };
      if (this.feed_dmd.dmb_fat > 45) {
        this.feed_dmd.dmb_fat_result = '過高';
        this.feed_dmd.fat_colorClass = [];
        this.feed_dmd.fat_colorClass.push(this.feed_dmd.colors[0]);
      };

      // 判斷碳水化合物
      if (this.feed_dmd.dmb_carbohydrate <= 0) {
        this.feed_dmd.dmb_carbohydrate_result = '過低';
        this.feed_dmd.carbohydrate_colorClass = [];
        this.feed_dmd.carbohydrate_colorClass.push(this.feed_dmd.colors[1]);
      };
      if (0 < this.feed_dmd.dmb_carbohydrate && this.feed_dmd.dmb_carbohydrate <= 25) {
        this.feed_dmd.dmb_carbohydrate_result = '符合';
        this.feed_dmd.carbohydrate_colorClass = [];
        this.feed_dmd.carbohydrate_colorClass.push(this.feed_dmd.colors[2]);
      };
      if (this.feed_dmd.dmb_carbohydrate > 25) {
        this.feed_dmd.dmb_carbohydrate_result = '過高';
        this.feed_dmd.carbohydrate_colorClass = [];
        this.feed_dmd.carbohydrate_colorClass.push(this.feed_dmd.colors[0]);
      }

      // 判斷纖維
      if (this.feed_dmd.dmb_fiber < 1) {
        this.feed_dmd.dmb_fiber_result = '過低';
        this.feed_dmd.fiber_colorClass = [];
        this.feed_dmd.fiber_colorClass.push(this.feed_dmd.colors[1]);
      };
      if (1 <= this.feed_dmd.dmb_fiber && this.feed_dmd.dmb_fiber <= 5) {
        this.feed_dmd.dmb_fiber_result = '符合';
        this.feed_dmd.fiber_colorClass = [];
        this.feed_dmd.fiber_colorClass.push(this.feed_dmd.colors[2]);
      };
      if (this.feed_dmd.dmb_fiber > 5) {
        this.feed_dmd.dmb_fiber_result = '過高';
        this.feed_dmd.fiber_colorClass = [];
        this.feed_dmd.fiber_colorClass.push(this.feed_dmd.colors[0]);
      }

    },

    // 半濕食 - 列出罐頭每日幾罐的選項
    halfWetFood_canDaliyNumber() {
      let choose = Array.apply(null, { length: this.allWetFood_Info.items + 1 }).map(Number.call, Number);
      choose.forEach((i) => {
        if (i < this.allWetFood_Info.items) {
          this.halfWetFood_Info.canDaliy_choose.push(i, (i + 0.5));
        }
      });
      this.halfWetFood_Info.canDaliy_choose.shift();
    },

    // 半濕食 - 計算飼料還需要幾克
    math_feed_g(can_item) {
      this.halfWetFood_Info.feed_g = ((this.cat_Info.daliyKcal - ((can_item) * this.can_Info.Kcal)) / (this.feed_Nutrition.feed_1KG_Kcal / 1000)).toFixed(0);

      // 算出飼料幾克之後，再執行以下
      this.feed_Nutrition_g();

      // N個罐頭的各營養 g
      this.halfWetFood_Info.Protein.can_Protein_g = Number(((can_item) * this.can_Info.Protein_g).toFixed(0));
      this.halfWetFood_Info.Fat.can_Fat_g = Number(((can_item) * this.can_Info.Fat_g).toFixed(0));
      this.halfWetFood_Info.Water.can_Water_g = Number(((can_item) * this.can_Info.Water_g).toFixed(0));

      // 半濕食配方 - 每日半濕食各營養 g
      this.halfWetFood_Info.Protein.number = Number((this.halfWetFood_Info.Protein.can_Protein_g + this.feed_Info.Protein_g).toFixed(0));
      this.halfWetFood_Info.Fat.number = Number((this.halfWetFood_Info.Fat.can_Fat_g + this.feed_Info.Fat_g).toFixed(0));
      this.halfWetFood_Info.Water.number = Number((this.halfWetFood_Info.Water.can_Water_g + this.feed_Info.Water_g).toFixed(0));

      // 算出半濕食各營養 g，再執行以下
      this.halfWetFood_compare_cat_result();

    },

    // 飼料 - 各營養 g
    feed_Nutrition_g() {
      // 蛋白質 g
      this.feed_Info.Protein_g = Number((this.halfWetFood_Info.feed_g * this.feed_Nutrition.Protein_p / 100).toFixed(0));
      // 脂肪 g
      this.feed_Info.Fat_g = Number((this.halfWetFood_Info.feed_g * this.feed_Nutrition.Fat_p / 100).toFixed(0));
      // 水分 g
      this.feed_Info.Water_g = Number((this.halfWetFood_Info.feed_g * this.feed_Nutrition.Water_p / 100).toFixed(0));
    },

    // 判斷 半濕食與貓咪每日營養 結論
    halfWetFood_compare_cat_result() {

      // 判斷蛋白質
      if (this.halfWetFood_Info.Protein.number < this.cat_Info.daliyProtein.min) {
        this.halfWetFood_Info.Protein.result = '不足';
        this.halfWetFood_Info.Protein.isOver = false;
        this.halfWetFood_Info.Protein.isLess = true;
        this.halfWetFood_Info.Protein.colorClass = [];
        this.halfWetFood_Info.Protein.colorClass.push(this.feed_dmd.colors[1]);
      };
      if (this.cat_Info.daliyProtein.min <= this.halfWetFood_Info.Protein.number && this.halfWetFood_Info.Protein.number <= this.cat_Info.daliyProtein.max) {
        this.halfWetFood_Info.Protein.result = '符合';
        this.halfWetFood_Info.Protein.isLess = false;
        this.halfWetFood_Info.Protein.isOver = false;
        this.halfWetFood_Info.Protein.colorClass = [];
        this.halfWetFood_Info.Protein.colorClass.push(this.feed_dmd.colors[2]);
      };
      if (this.halfWetFood_Info.Protein.number > this.cat_Info.daliyProtein.max) {
        this.halfWetFood_Info.Protein.result = '過高';
        this.halfWetFood_Info.Protein.isLess = false;
        this.halfWetFood_Info.Protein.isOver = true;
        this.halfWetFood_Info.Protein.colorClass = [];
        this.halfWetFood_Info.Protein.colorClass.push(this.feed_dmd.colors[0]);
      };

      // 判斷脂肪
      if (this.halfWetFood_Info.Fat.number < this.cat_Info.daliyFat.min) {
        this.halfWetFood_Info.Fat.result = '不足';
        this.halfWetFood_Info.Fat.isOver = false;
        this.halfWetFood_Info.Fat.isLess = true;
        this.halfWetFood_Info.Fat.colorClass = [];
        this.halfWetFood_Info.Fat.colorClass.push(this.feed_dmd.colors[1]);
      };
      if (this.cat_Info.daliyFat.min <= this.halfWetFood_Info.Fat.number && this.halfWetFood_Info.Fat.number <= this.cat_Info.daliyFat.max) {
        this.halfWetFood_Info.Fat.result = '符合';
        this.halfWetFood_Info.Fat.isLess = false;
        this.halfWetFood_Info.Fat.isOver = false;
        this.halfWetFood_Info.Fat.colorClass = [];
        this.halfWetFood_Info.Fat.colorClass.push(this.feed_dmd.colors[2]);
      };
      if (this.halfWetFood_Info.Fat.number > this.cat_Info.daliyFat.max) {
        this.halfWetFood_Info.Fat.result = '過高';
        this.halfWetFood_Info.Fat.isLess = false;
        this.halfWetFood_Info.Fat.isOver = true;
        this.halfWetFood_Info.Fat.colorClass = [];
        this.halfWetFood_Info.Fat.colorClass.push(this.feed_dmd.colors[0]);
      };

      // 判斷水分
      if (this.halfWetFood_Info.Water.number < this.cat_Info.daliyWater.min) {
        this.halfWetFood_Info.Water.result = '不足';
        this.halfWetFood_Info.Water.isOver = false;
        this.halfWetFood_Info.Water.isLess = true;
        this.halfWetFood_Info.Water.colorClass = [];
        this.halfWetFood_Info.Water.colorClass.push(this.feed_dmd.colors[1]);
      };
      if (this.cat_Info.daliyWater.min <= this.halfWetFood_Info.Water.number && this.halfWetFood_Info.Water.number <= this.cat_Info.daliyWater.max) {
        this.halfWetFood_Info.Water.result = '符合';
        this.halfWetFood_Info.Water.isLess = false;
        this.halfWetFood_Info.Water.isOver = false;
        this.halfWetFood_Info.Water.colorClass = [];
        this.halfWetFood_Info.Water.colorClass.push(this.feed_dmd.colors[2]);
      };
      if (this.halfWetFood_Info.Water.number > this.cat_Info.daliyWater.over) {
        this.halfWetFood_Info.Water.result = '過高';
        this.halfWetFood_Info.Water.isLess = false;
        this.halfWetFood_Info.Water.isOver = true;
        this.halfWetFood_Info.Water.colorClass = [];
        this.halfWetFood_Info.Water.colorClass.push(this.feed_dmd.colors[0]);
      };

    },

    // 判斷開啟 半濕食配方
    openHalfWetFood_result() {
      if (this.isOpenCat_Info === false) {
        alert('請填寫所有欄位');
      } else if (this.isOpenCat_Info !== false && this.isOpenCan_Info !== false && this.isOpenfeed_Info !== false) {
        this.isOpenHalfWetFood = !this.isOpenHalfWetFood;
      }
    },

  }
}
Vue.createApp(App).mount('#app');

