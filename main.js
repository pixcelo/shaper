


function formatSql(text){

    let array = ["AND","FROM","FULL","GROUP","INNER","LEFT","ON","ORDER","RIGHT","SET","WHERE","VALUES"];

    for(i=0; i<array.length; i++){
        let keyword = array[i];
        let after = " " + keyword + " ";

        // キーワード前後の半角スペースを１つにする
        text = text.replace(new RegExp(" +" + keyword + "+ ", "g"), after);

        // 改行
        let afterRn = "\r\n" + after;
        text = text.replace(new RegExp(after, "g"), afterRn);
    }

    // SELECTの後ろ改行
    text = text.replace(/SELECT/g, "SELECT\r\n");

    // カンマ：前後のスペース削除
    text = text.replace(/( +,|, +| +, +)/g, ",");

    // カンマ：改行（前カンマ）
    text = text.replace(/,/g, "\r\n , ");

    // かっこ：改行
    text = text.replace(/\(/g, "(\r\n");
    text = text.replace(/\)/g, "\r\n)\r\n");

    return text;

}