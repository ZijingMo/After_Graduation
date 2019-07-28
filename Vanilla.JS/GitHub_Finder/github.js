// Zijing Mo
// GitHub_Name_Finder Github class File

class Github {
    constructor() {
        this.client_id = ''; // Input your GitHub OAuth application client id
        this.client_secret = '';// Input your GitHub OAuth application client secrect id
        this.repos_count = 3;
        this.repos_sort = 'created: des';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&clinet_secret=${this.client_secret}`);       
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&clinet_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos            
        };
    }
}

