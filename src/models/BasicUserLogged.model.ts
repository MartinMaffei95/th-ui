export type BasicUserLogged = {
  nickname: string; // username with uuid or email if use Auth0
  name: string; // name. Is not important here
  type: 'guest' | 'authorized';
};
