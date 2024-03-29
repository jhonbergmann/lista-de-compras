import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from '../models/Schema'
import models from '../models'

const adapter = new SQLiteAdapter({
  dbName: 'listItems',
  schema
})

const database = new Database({
  adapter,
  modelClasses: models,
  actionsEnabled: true
})

export default database
