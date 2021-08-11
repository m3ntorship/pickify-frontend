export interface IFriendSuggestion {
  id: number;
  profilePic: string;
  username: string;
  mutualFriends: number;
}

export const dummyData: IFriendSuggestion[] = [
  {
    id: 0,
    profilePic:
      'https://s3-alpha-sig.figma.com/img/443e/6ac0/0864920f73a1963a9015537cae3da88e?Expires=1629676800&Signature=bQGAkd8egMt437a3uVrvuWZhbojvQXv1gT356NyqCL8OGFlYDlZp-~UtHMvqUq8thdWR~v5wsIuxy8l8l8OZIrGZ6tC1U~Fo90xUy529JxeFQuHGzR26XK4fK8ut~MLo6oVyUMYh7cQH0eU4el8nTBt4mWPLigGbpIIt95qVD9wnUaIpG7qyNkBKLtaQXDLuI4pGkQ9urDZBaq9tYVt~uD576PPH~R4v4NF~XHXyeBKNo14KC3DO5zATf~AZystGgqxSZ-XZbru8eJgPaOswzaVy8kk-JHlTzpqU4ABd-M8hC1leUK8OahLfFdDqipZzw00faOJ4iof8pIxjD4PoEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    username: 'Miles, Esther',
    mutualFriends: 1,
  },
  {
    id: 1,
    profilePic:
      'https://s3-alpha-sig.figma.com/img/cb93/2a1e/95ee3fe1d0525ebbb70c680640843817?Expires=1629676800&Signature=Eef~Ao4R6aewTFRzk6pRCq1UDX~nwibh-J4QcbmtXyO3UCnhkwlBm3kR3lm9jFba0OGNyQXXDDWUhIHMBAkITXZD2iOtWxrqFf9sjzQ2-iDls81YKyIHNE0W1L0H6N0Jbrj4cQFkWbz1LcBRYk9DcFgt2ILEvEzgBLZTJX5YOzw1wNAxicyTeVwIeepTQB6p~GoUFx8C0jMSaVV9RJkq2Bl5VS7hGsy912N7Azm~OvL0ms7wfe5YMyuzGtn9CY9qBjBqVxEIv5RnxTLmPenWAs7YVvok91kKw11wszjCALhwbDspUdsC7cT0dK6hQOqTqEH6oKiZNt~4Cs607UlRNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    username: 'Henry, Arthur',
    mutualFriends: 12,
  },
  {
    id: 2,
    profilePic:
      'https://s3-alpha-sig.figma.com/img/8493/2707/8f6ed6e699627695ce4a6a43610f328e?Expires=1629676800&Signature=Em6j~pyhQ5MNiimP4ay5tbFjcl0BjHsRZ3aQ~YAfN-P1md3X9IZ0~idWgOYd4n~aoohPPeHfrt8376A5vJ7TFLnv123ivwIchutC6S0-Ay2fc-N5JyjPCYndI9kkTrjxgQu0~Oe5DeC2ov9yeTqFxzNrLkR73LTVQw5McUfvuJxJ6Y-titU9RuJP17v3x2AOfbhxFV1PPIS4QgvWRvbvvZv2ZxvTRbs~IJKQn~F-PbmdYy7JAEwyNOOnYE-VFHy4g3W3iskgu0byC~8Gt0vSYXv0WXiyvAlCJ66tHeNT1woeDhpMlrRY6ZC7bB4-DCVjJrOsKGmQ3ZERWJkjxYRufg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    username: 'Flores, Juanita',
    mutualFriends: 12,
  },
  {
    id: 3,
    profilePic:
      'https://s3-alpha-sig.figma.com/img/2660/b932/2a16d64cb9c9a8da3815a07c5bd4ff56?Expires=1629676800&Signature=S3oSvlmXYKjp4e7VwudP9Rm03d9uoYYkvBBizTF4D~LWDceO4m77dZ7XSfIo13IRfL2ixGH9l9oL7WUynLWmakDVfA96Mcgh17kFsmNicLMzaXyiR0Q~L1KSUDeDHvY~QgCa4-KztcrKa~ZmVhhPyyBBAmvkES3fxvsIDte9d6V2mnJmIGZizMKyMeR077inO~TBq0vAhDLqGhNxiZWsvYJcc0xobARNcMfRtJlY7KXn24ADgT87Ajxe9uc9HmpFSX29H~Tmg546ofm7p7K0-qU~JksM5rSTwZdP7NWWBHRdEPiTInjRSlkuaVPHNRiKBJopwsVASHS9NC~qEXJSaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    username: 'Cooper, Kristin',
    mutualFriends: 1,
  },
  {
    id: 4,
    profilePic:
      'https://s3-alpha-sig.figma.com/img/24fc/d469/2a55e2577b912f31252342d93dc24f44?Expires=1629676800&Signature=M621dxUSDzF6C9CQ-FW7UPGZFwZPxBIrJxBWejE2K-eEmHsAzqyJz3yaJ2UWb89e76jHSzf2-96wpdQVHOBDzNMsX6zF90zNoUOH58zZt~gHvHhTf13coZUcJbIObxlaB~YGu7s61ESlcGSd3HT89qW37n6U~NMHWOUkbQ2tJV29WD0pRRxQwHZKmbbb7giz69EYB3W0VNs8NJquzk3LYWKIrw5Vi149UWy~cW7BEdk7eRBIoYiM2Pu8lQRrs-MoDNRufvmPz9PWfZiEKirZ7KRu2dn9phbywXLWZ9lP0L0GumPNCAuhIICcuObZTa5GIz6yUX9ArWeEVHo2I3z4~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    username: 'Nguyen, Shane',
    mutualFriends: 12,
  },
  {
    id: 5,
    profilePic:
      'https://s3-alpha-sig.figma.com/img/58c8/ebf7/591d3ed13bff1e0b58fe824ee0565a0f?Expires=1629676800&Signature=ZG~jkzup95vhd18v0cTX1kUlUKEANXXWZ8VbSgSEL58vhpQDFUIct--EVEdPZy8zqYvD0a~a6ibNpdateeSPcnQtGzcFRy74VvIs3cDMDdoVkegNn6y2dAtCoJWxRYcQGCKaOpk3p1b2smEhU3UtQspcOi9R2ZQ-EwLHuUMhBZcybxHPMfTynJlJwCWlGjb8~umSGWxuK009NCpeqSVouMUmSAS~0LBM0Z97vebkCyLVtxyEK0fpfHlc2HcfLIP4JVfTajpptjYaGJfVkvJgUFnK~z5Kb5Mr5S-pg5GTRsNYYIHw6-CjhO2woXqIAMpg4Rh9M6S3Ugf1XO6poXpk-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    username: 'Miles, Esther',
    mutualFriends: 12,
  },
  {
    id: 6,
    profilePic:
      'https://s3-alpha-sig.figma.com/img/b7e7/f0cf/17b6af13844c8cc6f967cb78fa863cca?Expires=1629676800&Signature=SaUzQ-c4VpxBWWYgUWMmiXKI5Mv9VY3lI-UfSzQKY~k1B8X2sGFPWp8PVMTK-3aQq3bU-j65a8cZNi8bGRk~KM8L36u9a-4q2CmOrdcegCmruFVy~2SQjnL3xBlGpfydDeo-nQYkhddoHxeU2S3bhKM7VifuL8mS4SJcT5y83aEr3jdvsG163NtGsWWdptcnKafRZQ5t-Ef8jfi0LJO8LLA84pk6pQnnoJeUkHAJQiDfDFyXAR~mxxFStV-UqWJSeMe9iQaC1UgyXslUQjYpEqq4dnWnC3uDET-doAnfVH6dSAOZTHFbuDc6vy6DMr3X5vrUMBjakGUjwzJdF-jKvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    username: 'Black, Marvin',
    mutualFriends: 12,
  },
];
