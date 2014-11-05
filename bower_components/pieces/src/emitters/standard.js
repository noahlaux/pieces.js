(function (namespace) {

    /**
     * Defaults settings for emitter
     * @type {Object}
     */
    var defaults = function () {
        return {

            /**
             * Render used for particles
             * @type {String}
             */
            render: 'canvas',

            /**
             * Particle prototype
             * @type {String}
             */
            particleName: 'standard',

            /**
             * Time between emitter spawns
             * @type {Number}
             */
            spawnInterval: 40,

            /**
             * Indicates if emitter should spawn particles
             * @type {Boolean}
             */
            paused: false,

            /**
             * Max life time for particle to live (in ms)
             * @type {Number}
             */
            maxLifeTime: 5000,

            /**
             * Current size of particle
             * @type {Number}
             */
            size: 0,

            /**
             * Initial and current life time of particle
             * @type {Number}
             */
            lifeTime: 0,

            /**
             * Start size of particle
             * @type {Number}
             */
            startSize: 30,

            /**
             * End size of particle
             * @type {Number}
             */
            endSize: 70,

            /**
             * Grow factor for particle
             * @type {Number}
             */
            growFactor: 0.1,

            /**
             * Current horizontal position for particle
             * @type {Number}
             */
            positionX: 0,

            /**
             * Current vertical position for particle
             * @type {Number}
             */
            positionY: 0,

            /**
             * Current horizontal particle velocity
             * @type {Number}
             */
            velocityX: 1,

            /**
             * Adds randomness to horizontal particle velocity
             * @type {Number}
             */
            velocityXRandomFactor: 0.5,

            /**
             * Current vertical velocity
             * @type {Number}
             */
            velocityY: 1,

            /**
             * Adds randomness to vertical particle velocity
             * @type {Number}
             */
            velocityYRandomFactor: 3,

            /**
             * Rotation span for particle
             * @type {Number}
             */
            rotationAngleSpan: 180,

            /**
             * Rotation speed of particle
             * @type {Number}
             */
            rotationSpeed: 0.2,

            /**
             * Start opacity of the particle
             * @type {Number}
             */
            startOpacity: 1,

            /**
             * Decline speed for opacity
             * @type {Number}
             */
            opacityDeclineSpeed: 0.01,

            /**
             * Filters to apply to asset
             * @type {Object}
             */
            filters: {},

            /**
             * Image to use for asset
             * @type {String}
             */
            image: 'data:image/png;base64,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'

        };
    };

    function Emitter(config) {


        /**
         * Settings
         * @type {Object}
         */
        this.settings = namespace.utils.deepExtend(defaults(), config);

        /**
         * Reference to the particle prototype
         * @type {Function}
         */
        this.ParticlePrototype = namespace.particleFactory.get(this.settings.particleName);

        /**
         * Reference to the last time the emitter was spawned
         * @type {Date}
         */
        this.lastTime = null;

        /**
         * Render engine prototype
         * @type {[type]}
         */
        var RenderEngine = namespace.particleRenderFactory.get(this.settings.render);

        /**
         * Render engine for emitter
         * @type {renderEngine}
         */
        this.renderEngine = new RenderEngine(this.settings);

        /**
         * Holds the current particles spawn by the emitter
         * @type {Array}
         */
        this.particles = [];

        //this.settings.maxLifeTime = Math.min(this.settings.maxLifeTime, (this.canvas.height / (1.5 * 60) * 1000));

        namespace.utils.loadAsset(this.settings.image, function (asset) {
            if (!namespace.utils.isEmpty(this.settings.filters)) {
                asset = namespace.filterFactory.applyFilters(asset, this.settings.filters);
            }
            this.settings.asset = asset;
            this.tick(this.settings);
        }.bind(this));

    }

    Emitter.prototype = {

        /**
         * Spawns a particle
         * @param  {Object} config settings for particle
         * @return
         */
        spawn: function (config) {
            // Set last time for spawn
            this.lastTime = this.lastTime || new Date().getTime();

            var now = new Date().getTime();

            if (!this.settings.paused && now > this.lastTime + this.settings.spawnInterval) {
                var particle = new this.ParticlePrototype(config);
                this.particles.push(particle);
                this.lastTime = now;
            }
        },

        /**
         * Fires on each emitter tick
         * @param  {[type]} config [description]
         * @return {[type]}        [description]
         */
        tick: function (config) {

            // Notice render engine
            this.renderEngine.onTick();

            var length = this.particles.length;

            while (length--) {
                var particle = this.particles[length];

                if (particle.isDead()) {
                    this.removeParticle(particle);
                } else {
                    particle.tick();
                    this.renderEngine.render(particle);
                }
            }

            this.spawn(config);
            requestAnimationFrame(function () {
                this.tick(config);
            }.bind(this));
        },

        /**
         * Removes provided particle
         * @param  {Particle} particle to be removed
         * @return {Particle} Removed particle
         */
        removeParticle: function (particle) {
            var index = this.particles.indexOf(particle);
            if (index > -1) {
                return this.particles.splice(index, 1);
            }
        },

        /**
         * Starts emitter
         * @return N/A
         */
        start: function () {
            this.settings.paused = false;
        },

        /**
         * Stops emitter
         * @return N/A
         */
        stop: function () {
            this.settings.paused = true;
        }
    };

    namespace.Emitter = Emitter;

})(window.pieces || {});
