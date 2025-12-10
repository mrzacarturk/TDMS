import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SourceTable } from './source-table.entity';

export type MaskingAlgorithm = 
| 'SHUFFLE'
| 'ANONYMIZE'
| 'TOKENIZE'
| 'NULLIFY'
| 'CUSTOM';

@Entity('masking_rules')
export class MaskingRule {
  @PrimaryGeneratedColumn()
  id?: number;
  
  @ManyToOne(() => SourceTable, table => table.rules, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tableId' })
  sourceTable?: SourceTable;

  @Column()
  tableId?: number; 

  @Column()
  columnName?: string;

  @Column({ 
      type: 'enum', 
      enum: ['SHUFFLE', 'ANONYMIZE', 'TOKENIZE', 'NULLIFY', 'CUSTOM'] 
  })
  algorithm?: MaskingAlgorithm; 

  @Column({ nullable: true })
  dataTypeHint?: string; 

  @Column({ default: true })
  isActive?: boolean;
  
  // Constructor
  constructor(
      id?: number, 
      tableId?: number, 
      columnName?: string, 
      algorithm?: MaskingAlgorithm, 
      dataTypeHint?: string, 
      isActive?: boolean,
      sourceTable?: SourceTable
  ) {
      this.id = id;
      this.tableId = tableId;
      this.columnName = columnName;
      this.algorithm = algorithm;
      this.dataTypeHint = dataTypeHint;
      this.isActive = isActive;
      this.sourceTable = sourceTable;
  }
}