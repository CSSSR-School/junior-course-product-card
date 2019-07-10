"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _indexModule = _interopRequireDefault(require("./index.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var range = function range(to) {
  return _toConsumableArray(Array(to).keys()).map(function (i) {
    return i + 1;
  });
};

function ProductItem(_ref) {
  var isInStock = _ref.isInStock,
      img = _ref.img,
      title = _ref.title,
      price = _ref.price,
      subPriceContent = _ref.subPriceContent,
      maxRating = _ref.maxRating,
      rating = _ref.rating,
      ratingComponent = _ref.ratingComponent;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(_indexModule.default.goods, _defineProperty({}, _indexModule.default.goodsNone, !isInStock))
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(_indexModule.default.goodsType, _defineProperty({}, _indexModule.default.goodsTypeNone, !isInStock))
  }, isInStock ? "В наличии" : "Недоступен"), _react.default.createElement("img", {
    className: (0, _classnames.default)(_indexModule.default.goodsImg, _defineProperty({}, _indexModule.default.goodsImgNone, !isInStock)),
    src: img,
    alt: "placeholder",
    width: "224",
    height: "200"
  }), _react.default.createElement("div", {
    className: _indexModule.default.goodsName
  }, title), _react.default.createElement("div", null, range(maxRating).map(function (i) {
    return _react.default.createElement(ratingComponent, {
      key: i,
      isFilled: i <= rating
    });
  })), _react.default.createElement("div", {
    className: _indexModule.default.goodsPrise
  }, price, subPriceContent));
}

;
ProductItem.propTypes = {
  title: _propTypes.default.node.isRequired,
  img: _propTypes.default.string.isRequired,
  price: _propTypes.default.node.isRequired,
  rating: _propTypes.default.number.isRequired,
  maxRating: _propTypes.default.number.isRequired,
  subPriceContent: _propTypes.default.node.isRequired,
  ratingComponent: _propTypes.default.func.isRequired,
  isInStock: _propTypes.default.bool.isRequired
};
var _default = ProductItem;
exports.default = _default;