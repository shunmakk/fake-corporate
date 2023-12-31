//=========jQueryのコードをここに全て書く===============//



// ①ハンバーガーボタンクリックで実行
  
// スマホ・タブレットサイズ時のみ表示されるメニューの開閉ボタンを変数に格納。
const spMenuBtn = $("#spMenuBtn");

// メニューや開閉ボタンをラップしている要素を変数に格納。
const headerInner = $("#headerInner");
// 開閉ボタンをクリックすると発火。
spMenuBtn.click(function() {
  // ラップ要素にactiveというクラスを付与する。
  headerInner.toggleClass("active");
});


 // ② メニューのリンクがクリックされたときの処理
$(document).ready(function() {
    $(".menu__link").on("click", function(e) {
      e.preventDefault(); // リンクのデフォルトの挙動を無効にする

      // 対象のセクションのIDを取得
      var targetId = $(this).attr("href");
      // 対象のセクションの位置を取得
      var targetPosition = $(targetId).offset().top;

      // メニューを閉じる
      $("#headerInner").removeClass("active");

      // アニメーションでスクロール
      $("html, body").animate(
        {
          scrollTop: targetPosition
        },
        600 // スクロールの速さを調整する場合は適宜変更
        );
     
    });
    });


    //informationの部分のjs

    $('#box1').on('inview', function(event, isInView) {
	if (isInView) {
		//要素が見えたときに実行する処理
		$("#box1 .count-up").each(function(){
			$(this).prop('Counter',0).animate({//0からカウントアップ
		        Counter: $(this).text()
		    }, {
				// スピードやアニメーションの設定
		        duration: 1500,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
	}
});

$('#box2').on('inview', function(event, isInView) {
	if (isInView) {
		//要素が見えたときに実行する処理
		$("#box2 .count-up1").each(function(){
			$(this).prop('Counter',0).animate({//0からカウントアップ
		        Counter: $(this).text()
		    }, {
				// スピードやアニメーションの設定
		        duration: 1500,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
	}
});

$('#box3').on('inview', function(event, isInView) {
	if (isInView) {
		//要素が見えたときに実行する処理
		$("#box3 .count-up2").each(function(){
			$(this).prop('Counter',300).animate({//0からカウントアップ
		        Counter: $(this).text()
		    }, {
				// スピードやアニメーションの設定
		        duration: 1500,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
	}
});

//値をグラフに表示させる
Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // 値の表示
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                    var fontSize = 15;//フォントサイズ
                    var fontStyle = 'normal';//フォントスタイル
                    var fontFamily = 'Sawarabi Gothic';//フォントファミリー
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    var dataString = dataset.data[index].toString();
					
                    // 値の位置
                    ctx.textAlign = 'center';//テキストを中央寄せ
                    ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え

                    var padding = 5;//余白
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
		
                });
            }
        });
    }
});


//=========== 円グラフ ============//
$('#chart01').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {
var ctx=document.getElementById("chart01");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'pie',//グラフのタイプ
data:{//グラフのデータ
	labels:["エンジニア","営業","デザイナー","その他",],//データの名前
	datasets:[{
			label:"職種別比率",//グラフのタイトル
			backgroundColor:["#BB5179","#FAFF67", "#58A27C","#3C00FF"],//グラフの背景色
			data:["55","20","15","10",]//データ
		}]
},

options:{//グラフのオプション
	maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
	legend:{
		display:true//グラフの説明を表示
	},
	tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
		callbacks:{
        label: function (tooltipItem, data) {
			return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
		}
    },		
	},
	title:{//上部タイトル表示の設定
		display: true,
		fontSize:8,
		text: '単位：%'
	},
}
});

}
});