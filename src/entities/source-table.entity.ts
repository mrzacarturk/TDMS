import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MaskingRule } from './masking-rule.entity';

@Entity('source_tables')
export class SourceTable {
  
  // Özellikler isteğe bağlı (?) hale getirildi
  @PrimaryGeneratedColumn()
  id?: number; 

  // Harici veritabanındaki tablo adı
  @Column({ unique: true })
  tableName?: string; 

  // Tablonun en son ne zaman metadata'sının okunduğu
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastRefreshed?: Date;

  // Bu tabloya ait maskeleme kuralları
  @OneToMany(() => MaskingRule, rule => rule.sourceTable)
  rules?: MaskingRule[];
  
  // Constructor, tüm özellikleri başlatır
  constructor(
      id?: number, 
      tableName?: string, 
      lastRefreshed?: Date, 
      rules?: MaskingRule[]
  ) {
      this.id = id;
      this.tableName = tableName;
      this.lastRefreshed = lastRefreshed;
      this.rules = rules;
  }
}