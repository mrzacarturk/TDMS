export type PrimitiveType = 
| 'string' 
| 'number'
| 'boolean'
| 'date'
| 'datetime'
| 'uuid'
| 'email'
| 'phone'
| 'array'
| 'object'
| 'null'
| 'undefined';

export interface SchemaField {
    name: string;
    type:PrimitiveType;
    required?: boolean;
    example?: unknown;
    itemType?: PrimitiveType; // for arrays 
    properties?: SchemaField[]; // for objects
}
 
export interface ExternalSchema {
    fields:  SchemaField[];
    version? :string;   
    source: string;
}