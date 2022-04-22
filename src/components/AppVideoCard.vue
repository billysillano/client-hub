<template>
  <div class="video-card">
		<div class="video-card__wrapper">
			<div class="video-card__thumbnail vd-margin-bottom-medium">
				<img
					:src="thumbnail"
					class="thumbnail vd-border-radius-6"
					alt="thumbnail" />

					<div class="video-card__count">
						<h3 class="vd-white vd-h3 vd-text-align-center">
							{{ count }}
						</h3>
						<p class="vd-light-grey vd-text-align-center">
							Video <span v-if="count > 1">s</span>
						</p>
					</div>
					<button
						@click="$emit('view')"
						class="video-card__view vd-btn-small vd-btn-blue">
						View
					</button>
			</div>
		</div>
		<p class="video-card__title vd-h4 vd-text-strong vd-margin-bottom-medium">
			{{ title}}
		</p>
		<p>
			<span class="vd-dark-grey">
				Producer:
			</span>
			<span class="vd-margin-left-large">
				{{ producer }}
			</span>
		</p>
		
		<p>
			<span class="vd-dark-grey">
				Date:
			</span>
			<span class="vd-margin-left-large">
				{{ producedDate }}
			</span>
		</p>
  </div>
</template>

<script>
export default {
	name: 'AppVideoCard',
	props: {
		title: {
			type: String,
			default: ''
		},
		thumbnail: {
			type: String,
			required: true
		},
		producer: {
			type: String,
			default: ''
		},
		producedDate: {
			type: String,
			default: ''
		},
		count: {
			type: Number,
			default: 1
		}
	}
}
</script>

<style lang="scss" scoped>
.video-card {
	width: 100%;

	&__title {
		line-height: 1.2em;
	}

	&__thumbnail {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 200px;
		width: 100%;
		overflow: hidden;

		.thumbnail {
			object-fit: cover;
			object-position: center;
		}

		&:after, .thumbnail {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		&:after {
			content: '';
			display: block;
			opacity: 0;
			transition: all 0.3s;
		}
	}

	&__view {
		position: relative;
		z-index: 1;
		transform: translateY(-10px);
	}

	&__count {
		position: absolute;
		z-index: 1;
		top: 0;
		right: 0;
		height: 100%;
		width: 60px;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transform: translateX(60px);
	}

	&__view,
	&__count {
		opacity: 0;
		transition: all 0.3s;
	}

	&__thumbnail:hover &__view, 
	&__thumbnail:hover &__count {
		opacity: 1;
		transform: translate(0,0)
	}
	&__thumbnail:hover:after {
		opacity: 1;
		background-color: rgba(0, 0, 0, 0.2);
	}
}
</style>