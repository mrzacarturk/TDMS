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
exports.MaskingRule = void 0;
var typeorm_1 = require("typeorm");
var source_table_entity_1 = require("./source-table.entity");
var MaskingRule = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('masking_rules')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _sourceTable_decorators;
    var _sourceTable_initializers = [];
    var _sourceTable_extraInitializers = [];
    var _tableId_decorators;
    var _tableId_initializers = [];
    var _tableId_extraInitializers = [];
    var _columnName_decorators;
    var _columnName_initializers = [];
    var _columnName_extraInitializers = [];
    var _algorithm_decorators;
    var _algorithm_initializers = [];
    var _algorithm_extraInitializers = [];
    var _dataTypeHint_decorators;
    var _dataTypeHint_initializers = [];
    var _dataTypeHint_extraInitializers = [];
    var _isActive_decorators;
    var _isActive_initializers = [];
    var _isActive_extraInitializers = [];
    var MaskingRule = _classThis = /** @class */ (function () {
        // Constructor
        function MaskingRule_1(id, tableId, columnName, algorithm, dataTypeHint, isActive, sourceTable) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.sourceTable = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _sourceTable_initializers, void 0));
            this.tableId = (__runInitializers(this, _sourceTable_extraInitializers), __runInitializers(this, _tableId_initializers, void 0));
            this.columnName = (__runInitializers(this, _tableId_extraInitializers), __runInitializers(this, _columnName_initializers, void 0));
            this.algorithm = (__runInitializers(this, _columnName_extraInitializers), __runInitializers(this, _algorithm_initializers, void 0));
            this.dataTypeHint = (__runInitializers(this, _algorithm_extraInitializers), __runInitializers(this, _dataTypeHint_initializers, void 0));
            this.isActive = (__runInitializers(this, _dataTypeHint_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
            __runInitializers(this, _isActive_extraInitializers);
            this.id = id;
            this.tableId = tableId;
            this.columnName = columnName;
            this.algorithm = algorithm;
            this.dataTypeHint = dataTypeHint;
            this.isActive = isActive;
            this.sourceTable = sourceTable;
        }
        return MaskingRule_1;
    }());
    __setFunctionName(_classThis, "MaskingRule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _sourceTable_decorators = [(0, typeorm_1.ManyToOne)(function () { return source_table_entity_1.SourceTable; }, function (table) { return table.rules; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)({ name: 'tableId' })];
        _tableId_decorators = [(0, typeorm_1.Column)()];
        _columnName_decorators = [(0, typeorm_1.Column)()];
        _algorithm_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: ['SHUFFLE', 'ANONYMIZE', 'TOKENIZE', 'NULLIFY', 'CUSTOM']
            })];
        _dataTypeHint_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _isActive_decorators = [(0, typeorm_1.Column)({ default: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _sourceTable_decorators, { kind: "field", name: "sourceTable", static: false, private: false, access: { has: function (obj) { return "sourceTable" in obj; }, get: function (obj) { return obj.sourceTable; }, set: function (obj, value) { obj.sourceTable = value; } }, metadata: _metadata }, _sourceTable_initializers, _sourceTable_extraInitializers);
        __esDecorate(null, null, _tableId_decorators, { kind: "field", name: "tableId", static: false, private: false, access: { has: function (obj) { return "tableId" in obj; }, get: function (obj) { return obj.tableId; }, set: function (obj, value) { obj.tableId = value; } }, metadata: _metadata }, _tableId_initializers, _tableId_extraInitializers);
        __esDecorate(null, null, _columnName_decorators, { kind: "field", name: "columnName", static: false, private: false, access: { has: function (obj) { return "columnName" in obj; }, get: function (obj) { return obj.columnName; }, set: function (obj, value) { obj.columnName = value; } }, metadata: _metadata }, _columnName_initializers, _columnName_extraInitializers);
        __esDecorate(null, null, _algorithm_decorators, { kind: "field", name: "algorithm", static: false, private: false, access: { has: function (obj) { return "algorithm" in obj; }, get: function (obj) { return obj.algorithm; }, set: function (obj, value) { obj.algorithm = value; } }, metadata: _metadata }, _algorithm_initializers, _algorithm_extraInitializers);
        __esDecorate(null, null, _dataTypeHint_decorators, { kind: "field", name: "dataTypeHint", static: false, private: false, access: { has: function (obj) { return "dataTypeHint" in obj; }, get: function (obj) { return obj.dataTypeHint; }, set: function (obj, value) { obj.dataTypeHint = value; } }, metadata: _metadata }, _dataTypeHint_initializers, _dataTypeHint_extraInitializers);
        __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: function (obj) { return "isActive" in obj; }, get: function (obj) { return obj.isActive; }, set: function (obj, value) { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MaskingRule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MaskingRule = _classThis;
}();
exports.MaskingRule = MaskingRule;
