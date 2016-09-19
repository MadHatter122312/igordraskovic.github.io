class ProfileArticlesCtrl {
  constructor(profile, $state, $rootScope) {
    'ngInject';

    this.profile = profile;

    this.profileState = $state.current.name.replace('app.profile.', '');

    // favorites and author articles require the 'all' type
    this.listConfig = { type: 'all' };

    // `main` state's filter should be by author
    if (this.profileState === 'main') {
      this.listConfig.filters = {author: this.profile.username};
      // set page title
      $rootScope.setPageTitle('@' + this.profile.username);

    } else if (this.profileState === 'favorites') {
      this.listConfig.filters = {favorited: this.profile.username};
      // set page title
      $rootScope.setPageTitle(`Articles favorited by ${this.profile.username}`);
    }


  }
}

export default ProfileArticlesCtrl;
