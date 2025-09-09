export const myGraphData = {
    nodes: [
        { id: 'Ana', group: 'Influencer', avatar: 'woman.png' },
        { id: 'Bruno', group: 'Friend', avatar: 'man.png' },
        { id: 'Carla', group: 'Family', avatar: 'woman.png' },
        { id: 'Diego', group: 'Follower', avatar: 'man.png' },

        { id: 'Eduarda', group: 'Follower', avatar: 'woman.png' },
        { id: 'Felipe', group: 'Friend', avatar: 'man.png' },
        { id: 'Alice', group: 'Friend', avatar: 'woman.png' },
        { id: 'Pedro', group: 'Family', avatar: 'man.png' },

        { id: 'Miguel', group: 'Follower', avatar: 'man.png' },
        { id: 'Rafael', group: 'Follower', avatar: 'man.png' },
        { id: 'Vitor', group: 'Follower', avatar: 'man.png' },
        { id: 'Beatriz', group: 'Follower', avatar: 'woman.png' },
    ],
    links: [
        { source: 'Ana', target: 'Bruno', type: 'Friend' },
        { source: 'Bruno', target: 'Carla', type: 'Friend' },
        { source: 'Carla', target: 'Diego', type: 'Friend' },
        { source: 'Diego', target: 'Ana', type: 'Friend' },

        { source: 'Eduarda', target: 'Felipe', type: 'Friend' },
        { source: 'Felipe', target: 'Alice', type: 'Friend' },
        { source: 'Alice', target: 'Pedro', type: 'Friend' },
        { source: 'Pedro', target: 'Eduarda', type: 'Friend' },

        { source: 'Miguel', target: 'Rafael', type: 'Friend' },
        { source: 'Rafael', target: 'Vitor', type: 'Friend' },
        { source: 'Vitor', target: 'Beatriz', type: 'Friend' },
        { source: 'Beatriz', target: 'Miguel', type: 'Friend' },
        
        { source: 'Ana', target: 'Eduarda', type: 'Friend' },
        { source: 'Eduarda', target: 'Miguel', type: 'Friend' },

        { source: 'Bruno', target: 'Felipe', type: 'Friend' },
        { source: 'Felipe', target: 'Rafael', type: 'Friend' },

        { source: 'Carla', target: 'Alice', type: 'Friend' },
        { source: 'Alice', target: 'Vitor', type: 'Friend' },

        { source: 'Diego', target: 'Pedro', type: 'Friend' },
        { source: 'Pedro', target: 'Beatriz', type: 'Friend' },
    ]
};
