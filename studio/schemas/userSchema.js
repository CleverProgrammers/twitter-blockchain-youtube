export const userSchema = {
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
    },
    {
      name: 'profileImage',
      type: 'string',
      title: 'Profile Image',
    },
    {
      name: 'isProfileImageNft',
      title: 'Is Profile Image NFT',
      type: 'boolean',
    },
    {
      name: 'coverImage',
      type: 'string',
      title: 'Cover Image',
    },
    {
      name: 'tweets',
      title: 'Tweets',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tweets' }],
        },
      ],
    },
  ],
}
