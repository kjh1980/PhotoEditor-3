var PhotoEditor = PhotoEditor || {};
PhotoEditor.Size = function (options) {
    $.extend(this, options || {});
    this.init();
};
PhotoEditor.Size.prototype = {
    init : function(){
    console.log("size object init");
        this._setElement();
        this._attachEvent();
    },
    _setElement: function () {
        this._Canvas = this.Canvas;
        this._resizeSel = $("#_resize_slt");
        this._resizeAllBtn = $("#_resize_all_btn");
        this._refreshBtn = $("#_refresh_btn");
        this._undoneBtn = $("#_undone_btn");
        this._resotreBtn = $("#_restore_btn");
        this._rotateRightBtn = $("#_rotate_right_btn");
        this._rotateLeftBtn = $("#_rotate_left_btn");
        this._cropBtn = $("#_crop_btn");
        this._flipVtc = $("#_flip_vtc");
        this._flipHrz = $("#_flip_hrz");
    },
    _attachEvent: function () {
        this._resizeSel.on("change", $.proxy(this._setResize, this));
        this._rotateRightBtn.on("click", $.proxy(this._onClickClockRotateBtn, this));
        this._rotateLeftBtn.on("click", $.proxy(this._onClickUnClockRotateBtn, this));
        this._flipHrz.on("click", $.proxy(this._onClickFlipHrzBtn, this));
        this._flipVtc.on("click", $.proxy(this._onClickFlipVtcBtn, this));
    },
    _setResize : function(){
        var width = this._resizeSel.children(":selected").text();
        if(isNaN(width)===false){
            this._Canvas.setResize(width);
        }
    },
    _onClickClockRotateBtn : function(){
        this._Canvas.setRotateClock();
    },
    _onClickUnClockRotateBtn : function(){
        this._Canvas.setRotatedUnClock();
    },
    _onClickFlipHrzBtn : function(){
        this._Canvas.setFlipHorizon();
    },
    _onClickFlipVtcBtn : function(){
        this._Canvas.setFlipVerticalty();
    }
};