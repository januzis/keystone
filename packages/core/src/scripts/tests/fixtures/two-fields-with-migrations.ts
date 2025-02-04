import { list, config } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { checkbox, text } from '@keystone-6/core/fields';

export default config({
  db: {
    provider: 'sqlite',
    url: 'file:./app.db',
    useMigrations: true,
  },
  ui: { isDisabled: true },
  lists: {
    Todo: list({
      access: allowAll,
      fields: {
        title: text(),
        isComplete: checkbox(),
      },
    }),
  },
});
