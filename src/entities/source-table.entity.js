"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceTable = void 0;
var typeorm_1 = require("typeorm");
var masking_rule_entity_1 = require("./masking-rule.entity");
var SourceTable = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('source_tables')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _tableName_decorators;
    var _tableName_initializers = [];
    var _tableName_extraInitializers = [];
    var _lastRefreshed_decorators;
    var _lastRefreshed_initializers = [];
    var _lastRefreshed_extraInitializers = [];
    var _rules_decorators;
    var _rules_initializers = [];
    var _rules_extraInitializers = [];
    var SourceTable = _classThis = /** @class */ (function () {
        function SourceTable_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            // Harici veritabanındaki tablo adı
            this.tableName = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _tableName_initializers, void 0));
            this.lastRefreshed = (__runInitializers(this, _tableName_extraInitializers), __runInitializers(this, _lastRefreshed_initializers, void 0));
            this.rules = (__runInitializers(this, _lastRefreshed_extraInitializers), __runInitializers(this, _rules_initializers, void 0));
            __runInitializers(this, _rules_extraInitializers);
        }
        return SourceTable_1;
    }());
    __setFunctionName(_classThis, "SourceTable");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _tableName_decorators = [(0, typeorm_1.Column)({ unique: true })];
        _lastRefreshed_decorators = [(0, typeorm_1.Column)({ type: 'timestamp', default: function () { return 'CURRENT_TIMESTAMP'; } })];
        _rules_decorators = [(0, typeorm_1.OneToMany)(function () { return masking_rule_entity_1.MaskingRule; }, function (rule) { return rule.sourceTable; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _tableName_decorators, { kind: "field", name: "tableName", static: false, private: false, access: { has: function (obj) { return "tableName" in obj; }, get: function (obj) { return obj.tableName; }, set: function (obj, value) { obj.tableName = value; } }, metadata: _metadata }, _tableName_initializers, _tableName_extraInitializers);
        __esDecorate(null, null, _lastRefreshed_decorators, { kind: "field", name: "lastRefreshed", static: false, private: false, access: { has: function (obj) { return "lastRefreshed" in obj; }, get: function (obj) { return obj.lastRefreshed; }, set: function (obj, value) { obj.lastRefreshed = value; } }, metadata: _metadata }, _lastRefreshed_initializers, _lastRefreshed_extraInitializers);
        __esDecorate(null, null, _rules_decorators, { kind: "field", name: "rules", static: false, private: false, access: { has: function (obj) { return "rules" in obj; }, get: function (obj) { return obj.rules; }, set: function (obj, value) { obj.rules = value; } }, metadata: _metadata }, _rules_initializers, _rules_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SourceTable = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SourceTable = _classThis;
}();
exports.SourceTable = SourceTable;
